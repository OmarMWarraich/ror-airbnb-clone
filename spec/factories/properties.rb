FactoryBot.define do
  factory :property do
    name { 'MyString' }
    description { 'MyText' }
    headline { 'MyString' }
    address_1 { 'MyString' }
    address_2 { 'MyString' }
    city { 'MyString' }
    state { 'MyString' }
    country { 'MyString' }
    price_cents { 1 }

    trait :with_images do
      after :create do |property|
        property.images.attach(io: File.open(Rails.root.join('spec', 'fixtures', 'image.jpg')), filename: 'image.jpg', content_type: 'image/jpg')
      end
    end

    trait :with_reviews do
      after :create do |property|
        create_list(:review, 3, property: property)
      end
    end

    trait :with_wishlists do
      after :create do |property|
        create_list(:wishlist, 3, property: property)
      end
    end

    trait :with_wishlist_users do
      after :create do |property|
        create_list(:wishlist, 3, property: property)
      end
    end

    trait :with_average_final_rating do
      after :create do |property|
        property.update_average_rating
      end
    end

  end
end
