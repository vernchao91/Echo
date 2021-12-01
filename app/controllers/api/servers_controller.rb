class Api::ServersController < ApplicationController

  def index
    # list of all the servers the user has joined
    if params[:user_id]
      # user = User.find_by(id: params[:user_id])
      # @servers = user.joined_servers
      @servers = current_user.joined_servers
    else
      @servers = Server.all
    end
    render :index
  end

  def show
    @server = Server.find_by(id: params[:id])
    if @server
      @list = List.new(user_id: current_user.id, server_id: @server.id)
      @list.save
      render :show
    else
      render json: { error: "Server doesn't exist" }, status: 404
    end
  end

  def create
    @server = Server.new(server_params)
    @server.owner_id = current_user.id
    @server.name = @server.name.strip
    if @server.name.length == 0
      @server.name = current_user.username + "'s Server"
    end
    if @server && @server.save
      # automatically makes current_user join server
      List.create!(server_id: @server.id, user_id: current_user.id)
      # Channel.create!(server_id: @server.id, name: "General")
      render :show
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def update
    @server = Server.find_by(id: params[:id])
    if @server && @server.update(server_params)
      render :show
    elsif !@server
      render json: { error: "Server doesn't exist" }, status: 404
    else
      render json: { error: "This field is required" }, status: 422
    end
  end

  def destroy
    @server = Server.find_by(id: params[:id])
    if @server && @server.destroy
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
