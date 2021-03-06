class Api::ListsController < ApplicationController

  def create
    @list = List.new(list_params)
    #serverid and userid always set, dont have to pass in anything
    @list.user_id = current_user.id
    if @list && @list.save
      render :show
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def destroy
    server_id = params[:server_id]
    @list = List.find_by(server_id: server_id, user_id: current_user.id)
    if @list && (@list.user_id == current_user.id) && @list.destroy
      @cu = current_user
      render :show
    else
      render json: { error: "User has not joined the server" }, status: 404
    end
  end

  private
  def list_params
    params.require(:list).permit(:server_id, :user_id)
  end

end