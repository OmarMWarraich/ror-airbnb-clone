FactoryBot.define do
  factory :wishlist do
    association :user
    association :property
  end
end
