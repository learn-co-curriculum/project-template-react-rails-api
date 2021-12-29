class CreateLocations < ActiveRecord::Migration[6.1]
  def change
    create_table :locations do |t|
      t.string :city
      t.string :name
      t.string :address
      t.string :details

      t.timestamps
    end
  end
end
