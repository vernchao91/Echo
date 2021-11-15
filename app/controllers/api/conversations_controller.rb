class Api::ConversationsController < ApplicationController
  def index
    if params[:user_id]
      user = User.find_by(id: params[:user_id])
      @conversations = (user.started_conversations + user.received_conversations)
      # @conversations = Conversation.where("owner_id = ? OR user_id = ?", user.id, user.id)
    else
    end
      render :index
    # @conversations = current_user.
  end

  def show

  end

  def create

  end

  def destroy
  end

  private
  def conversation_params
    params.require(:conversation).permit(:owner_id, :user_id)
  end

end
