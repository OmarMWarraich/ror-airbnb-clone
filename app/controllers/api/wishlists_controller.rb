class Api::WishlistsController < ApplicationController
  protect_from_forgery with: :null_session
  before_action :set_wishlist, only: [:destroy]


 def create
  respond_to do |format|
    format.json do
      begin
        wishlist = Wishlist.create!(wishlist_params)
        render json: wishlist.to_json, status: :ok
      rescue ActiveRecord::RecordInvalid => e
        render json: { error: e.message }, status: :unprocessable_entity
      end
    end
  end
end

    def destroy
      wishlist = Wishlist.find(params[:id])
      wishlist.destroy()

      respond_to do |format|
        format.json do
          if @wishlist&.destroy
            head :no_content
          else
            render json: { error: "Failed to delete wishlist" }, status: :unprocessable_entity
          end
        end
      end
    end

    private

    def wishlist_params
      params.permit(:user_id, :property_id)
    end

    def set_wishlist
      @wishlist = Wishlist.find_by(id: params[:id])
      render json: { error: "Wishlist not found" }, status: :not_found unless @wishlist
    end
  end
