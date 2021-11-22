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
    @conversation.owner_id = current_user.id
    @conversation.owner_username = current_user.username
    user = User.find_by(username: @conversation.user_username)
    if user.nil?
      render json: [ "User not found, Double check that the capitalization, spelling, or numbers are correct." ], status: 422
    else
      @conversation2 = Conversation.find_by(user_id: current_user.id, owner_id: user.id)
      @conversation.user_id = user.id
      if (!@conversation2 || (@conversation.owner_id == @conversation2.user_id || @conversation2.user_id == @conversation.user_id)) && (@conversation2 && @conversation2.pending)
        render json: [ "There is already a friend request pending Awaiting your reponse." ], status: 404
      elsif (@conversation2 && !@conversation2.pending)
        render json: [ "You are already friends with this user." ], status: 404
      elsif (@conversation.owner_id == @conversation.user_id)
        render json: [ "You cannot add yourself as a friend.  Sorry :( You can make friends in the Public Servers!" ], status: 404
      elsif @conversation && @conversation.save
        render :show
      else
        render json: [ "You have already sent a friend request. Awaiting response from user." ], status: 404
      end
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
