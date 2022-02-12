class CreateProperties < ActiveRecord::Migration[6.1]
  def change
    create_table :properties do |t|
      t.string :address
      t.string :city
      t.boolean :owner_occupied
      t.integer :owner_id

      t.timestamps
    end
  end
end
