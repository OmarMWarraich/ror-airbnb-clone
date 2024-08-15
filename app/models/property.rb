class Property < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true
  validates :headline, presence: true
  validates :address_1, presence: true
  validates :city, presence: true
  validates :state, presence: true
  validates :country, presence: true
  monetize :price_cents, allow_nil: true

  has_many_attached :images

  has_many :reviews, dependent: :destroy

  def update_average_rating
    update_column(:average_final_rating, reviews.average(:final_rating))
  end
end
