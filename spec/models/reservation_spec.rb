require 'rails_helper'

RSpec.describe Reservation, type: :model do
  describe 'associations' do
    it { should belong_to(:user) }
    it { should belong_to(:property) }
  end

  describe 'validations' do
    it { should validate_presence_of(:checkin_date) }
    it { should validate_presence_of(:checkout_date) }
  end
end
