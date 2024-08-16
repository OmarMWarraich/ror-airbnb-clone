FactoryBot.define do
  factory :reservation do
    user { nil }
    property { nil }
    checkin_date { "2024-08-16" }
    checkout_date { "2024-08-16" }
  end
end
