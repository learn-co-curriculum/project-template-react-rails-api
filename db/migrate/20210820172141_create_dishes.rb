class CreateDishes < ActiveRecord::Migration[6.1]
  def change
    create_table :dishes do |t|
      t.string :name
      t.string :cuisine
      t.integer :price
      t.string :image_url
      t.string :street_name
      t.string :city_name

      t.timestamps
    end
  end
end
