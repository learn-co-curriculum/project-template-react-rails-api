class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.integer :restaurant_id
      t.integer :menu_id
      t.integer :price

      t.timestamps
    end
  end
end
