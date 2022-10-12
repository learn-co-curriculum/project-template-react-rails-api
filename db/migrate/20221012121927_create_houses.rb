class CreateHouses < ActiveRecord::Migration[6.1]
  def change
    create_table :houses do |t|
      t.string :location
      t.string :description
      t.string :image
      t.integer :tenant_id
      t.integer :landlord_id

      t.timestamps
    end
  end
end
