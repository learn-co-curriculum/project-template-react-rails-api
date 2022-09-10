class CreateTrails < ActiveRecord::Migration[6.1]
  def change
    create_table :trails do |t|
      t.string :name
      t.string :city
      t.integer :state_id
      t.string :description
      t.string :directions
      t.float :latitude
      t.float :longitude
      t.integer :length
      t.timestamps
    end
  end
end
