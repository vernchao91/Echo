class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      login(@user)
      render "api/users/show"
    else
      render json: { error: "Invalid credentials, please try again."}, status: 401
    end
  end

  def destroy
    if current_user
      logout
      render json: { message: "Logout Successful" }
    else
      render json: { error: "No user currently signed in."}, status: 404
    end
  end

end
