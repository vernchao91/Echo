class Api::ConversationsController < ApplicationController
  def index
    user = User.find_by(id: params[:user_id])
    # @conversations = (user.started_conversations + user.received_conversations)
    @conversations = Conversation.where("owner_id = ? OR user_id = ?", user.id, user.id)
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
    @conversation.owner_id = current_user.id
    if @conversation && @conversation.save
      render :show
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
    params.require(:conversation).permit(:owner_id, :user_id)
  end

end
