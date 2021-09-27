class Api::UsersController < ApplicationController

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

  def destroy
    @user = User.find_by(id: params[:id])
    if @user
      @user.destroy
      render :show
    else
      render json: ["Could not find user"]
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

end
