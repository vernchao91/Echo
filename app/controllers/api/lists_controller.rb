class Api::ListsController < ApplicationController

  def create
    @list = List.new(list_params)
    # @list.server_id = params[:server_id]
    @list.user_id = current_user.id
    if @list
      @list.save
      render :show
    else
      render json: { message: "You have already joined the server" }, status: 200
    end
  end

  def destroy
    @list = List.find_by(server_id: params[:server_id])
    if (@list.user_id == current_user.id)
      @list.destroy
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