class Api::ListsController < ApplicationController
  def create
    @list = List.new(list_params)
    if @list.save
      render :show
    else
      @list.errors.full_messages
  end

  def destroy
    @list = List.find_by(id: params[:id])

    @list.destroy
    render :show
  end

  private
  def list_params
    params.require(:list).permit(:server_id, :user_id)
  end
end