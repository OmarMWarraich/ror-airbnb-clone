class CreateReviews < ActiveRecord::Migration[7.1]
  def change
    create_table :reviews do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :property, null: false, foreign_key: true
      t.string :content
      t.integer :cleanliness_rating
      t.integer :accuracy_rating
      t.integer :checkin_rating
      t.integer :communication_rating
      t.integer :location_rating
      t.integer :value_rating
      t.decimal :final_rating

      t.timestamps
    end
  end
end
