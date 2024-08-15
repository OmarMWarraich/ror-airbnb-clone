# spec/controllers/api/wishlists_controller_spec.rb
require 'rails_helper'

RSpec.describe Api::WishlistsController, type: :controller do
  let(:user) { create(:user) }
  let(:property) { create(:property) }

  describe "POST #create" do
    context "with valid parameters" do
      it "creates a new wishlist" do
        expect {
          post :create, params: { user_id: user.id, property_id: property.id }, as: :json
        }.to change(Wishlist, :count).by(1)
      end

      it "returns a success status" do
        post :create, params: { user_id: user.id, property_id: property.id }, as: :json
        expect(response).to have_http_status(:ok)
      end
    end

    context "with invalid parameters" do
      it "does not create a new wishlist" do
        expect {
          post :create, params: { user_id: nil, property_id: property.id }, as: :json
        }.not_to change(Wishlist, :count)
        expect(response).to have_http_status(:unprocessable_entity)
      end

      it "returns an error status" do
        post :create, params: { user_id: nil, property_id: property.id }, as: :json
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end

  describe "DELETE #destroy" do
    let!(:wishlist) { create(:wishlist, user: user, property: property) }

    it "destroys the wishlist" do
      expect {
        delete :destroy, params: { id: wishlist.id }, as: :json
      }.to change(Wishlist, :count).by(-1)
    end

    it "returns a no content status" do
      delete :destroy, params: { id: wishlist.id }, as: :json
      expect(response).to have_http_status(:no_content)
    end
  end
end
