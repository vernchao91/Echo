class Api::ServersController < ApplicationController

  def index
    if params[:user_id]
      user = User.find_by(id: params[:user_id])
      @servers = user.joined_servers
    else
      @servers = Server.all
    end
    render :index
  end

  def show
    @server = Server.find_by(id: params[:id])
    if @server
      render :show
    else
      render json: {}
    end
  end

  def create
    @server = Server.new(server_params)
    @server.owner_id = current_user.id
    if @server && @server.save
     # Channel.create!(server_id: @server.id, name: "General")
      render :show
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def update
    @server = Server.find_by(id: params[:id])
    if @server && @server.update
      render :show
    elsif !@server
      render json: { message: "Server doesn't exist" }, status: 404
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def destroy
    @server = Server.find_by(id: params[:id])
    if @server
      render :show
    else
      render json: { message: "Server doesn't exist" }, status: 404
    end
  end

  private
  def server_params
    params.require(:server).permit(:name, :owner_id)
  end
end
