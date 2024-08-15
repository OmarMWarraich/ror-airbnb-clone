require 'rails_helper'

RSpec.describe Wishlist, type: :model do
  describe 'associations' do
    it { should belong_to(:user) }
    it { should belong_to(:property) }
  end

  describe 'validations' do
    it { should belong_to(:user) }
    it { should belong_to(:property) }

    it 'is valid with valid attributes' do
      user = create(:user)
      property = create(:property)
      wishlist = build(:wishlist, user: user, property: property)
      expect(wishlist).to be_valid
    end

    it 'is not valid without a user' do
      property = create(:property)
      wishlist = build(:wishlist, user: nil, property: property)
      expect(wishlist).not_to be_valid
    end

    it 'is not valid without a property' do
      user = create(:user)
      wishlist = build(:wishlist, user: user, property: nil)
      expect(wishlist).not_to be_valid
    end

    it 'does not allow the same property to be added to the wishlist by the same user more than once' do
      user = create(:user)
      property = create(:property)
      create(:wishlist, user: user, property: property)
      duplicate_wishlist = build(:wishlist, user: user, property: property)
      expect(duplicate_wishlist).not_to be_valid
    end
  end
end
