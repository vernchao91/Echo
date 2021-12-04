class Api::MessagesController < ApplicationController
  def index
    if params[:channel_id]
      channel = Channel.find_by(id: params[:channel_id])
      @messages = Message.where(messageable_type: :Channel, messageable_id: channel.id).order(created_at: :desc).limit(50)
    elsif params[:conversation_id]
      conversation = Conversation.find_by(id: params[:conversation_id])
      @messages = Message.where(messageable_type: :Conversation, messageable_id: conversation.id).order(created_at: :desc).limit(50)
    else
      render json: { msg: "No messages created" }, status: 404
    end
    render :index
  end

  def show
    @message = Message.find_by(id: params[:id])
    if @message
      render :show
    else
      render json: { error: "Message doesn't exist" }, status: 404
    end
  end

  def create
    if params[:channel_id]
      channel = Channel.find_by(id: params[:channel_id])
      @message = Message.new(message_params)
    end
    if @message && @message.save
        render :show
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def update
    @message = Message.find_by(id: params[:id])
    if @message && @message.update(message_params)
      render :show
    else
      render @message.errors.full_messages, status: 422
    end
  end

  def destroy
    @message = Message.find_by(id: params[:id])
    if @message && @message.destroy
      render :show
    else
      render @message.errors.full_messages, status: 422
    end
  end

  private
  def message_params
    params.require(:message).permit(:body, :author_id, :messageable_id, :messageable_type)
  end
end