class Api::ConversationsController < ApplicationController
  def index
    # user = User.find_by(id: params[:user_id])
    # @conversations = (user.started_conversations + user.received_conversations)
    @conversations = Conversation.where("owner_id = ? OR user_id = ?", current_user.id, current_user.id)
    render :index
  end

  def show
    @conversation = Conversation.find_by(id: params[:id])
    if @conversation
      render :show
    else
      render json: { error: "Conversation doesn't exist" }, status: 404
    end
  end

  def create
    @conversation = Conversation.new(conversation_params)
    user = User.find_by(username: @conversation.user_username)
    @conversation.user_id = user.id
    @conversation.owner_id = current_user.id
    @conversation.owner_username = current_user.username
    if @conversation && @conversation.save
      render :show
    else
      render json: @conversation.errors.full_messages, status: 422
    end
  end

  def update
    @conversation = Conversation.find_by(id: params[:id])
    if @conversation && @conversation.update(conversation_params)
      render :show
    elsif !@conversation
      render json: { error: "Conversation doesn't exist" }, status: 404
    else
      render json: @conversation.errors.full_messages, status: 422
    end
  end

  def destroy
    @conversation = Conversation.find_by(id: params[:id])
    if @conversation && @conversation.destroy
      render :show
    else
      render json: { error: "Conversation doesn't exist" }, status: 404
    end
  end

  private
  def conversation_params
    params.require(:conversation).permit(:owner_id, :user_id, :pending, :owner_username, :user_username)
  end

end
