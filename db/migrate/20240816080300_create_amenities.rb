class CreateAmenities < ActiveRecord::Migration[7.1]
  def change
    create_table :amenities do |t|
      t.string :name, null: false
      t.string :description
      t.string :icon

      t.timestamps
    end

    add_index :amenities, :name, unique: true
  end
end
