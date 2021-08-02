class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.integer :user_id
      t.integer :cart_id
      t.integer :drink_id
      t.integer :bean_id
      t.timestamps
    end
  end
end
