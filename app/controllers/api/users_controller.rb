class Api::UsersController < ApplicationController

  def index
    if params[:server_id]
      server = Server.find_by(id: params[:server_id])
      @users = server.joined_users
    else
      
    end
    render :index
  end

  def show
    @user = User.find_by(id: params[:id])
    render :show
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @server = Server.find_by(id: params[:id])
    if @server && server.update(server_params)
      render :show
    else
      render @server.errors.full_messages, status: 422
    end
  end

  def destroy
    @user = User.find_by(id: params[:id])
    if @user
      @user.destroy
      render :show
    else
      render json: { error: "Could not find user" }, status: 404
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

end
