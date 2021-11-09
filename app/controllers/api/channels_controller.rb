class Api::ChannelsController < ApplicationController

  def index
    # list of all channels in the server
    if params[:server_id]
      server = Server.find_by(id: params[:server_id])
      @channels = server.channels
    else
      # list of all channels
      @channels = Channels.all
    end
    render :index
  end

  def show
    @channel = Channel.find_by(id: params[:id])
    if @channel
      render :show
    else
      render json: { error: "Channel doesn't exist" }, status: 404
    end
  end

  def create
    server = Server.find_by(id: params[:server_id])
    @channel = Channel.new(channel_params)
    @channel.server_id = server.id
    if @channel && @channel.save
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def update
    @channel = Channel.find_by(id: params[:id])
    if @channel && @channel.update(channel_params)
      render :show
    elsif !@channel
      render json: { error: "Server doesn't exist" }, status: 404
    else
      render json: @channel.errors.full_messages, status: 404
    end
  end

  def destroy
    @channel = Channel.find_by(id: params[:id])
    if @channel && @channel.destroy
      render :show
    else
      render json: { message: "Channel doesn't exist" }, status: 404
    end
  end

  private
  def channel_params
    params.require(:channel).permit(:name, :server_id)
  end
end
