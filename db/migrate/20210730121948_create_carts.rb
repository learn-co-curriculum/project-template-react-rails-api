class CreateCarts < ActiveRecord::Migration[6.1]
  def change
    create_table :carts do |t|
      t.integer :user_id
      t.string :address
      t.float :price
      t.timestamps
    end
  end
end
