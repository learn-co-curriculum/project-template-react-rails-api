class CreateCities < ActiveRecord::Migration[6.1]
  def change
    create_table :cities do |t|
      t.string :city
      t.string :region
      t.string :country
      t.string :currency
      t.decimal :latitude
      t.decimal :longitude
      t.integer :elevation_meters
      t.boolean :on_water
      t.integer :population
      t.float :monthly_after_tax_salary
      t.float :apt_price_per_meter2_outside_city_center
      t.float :apt_price_per_meter2_inside_city_center
      t.float :monthly_rent_one_bdrm_outside_city_center
      t.float :monthly_rent_one_bdrm_inside_city_center
      t.float :monthly_utilities
      t.float :monthly_internet
      t.string :wikidata_id

      t.timestamps
    end
  end
end
