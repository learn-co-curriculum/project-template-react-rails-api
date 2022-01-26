class CreateBuyers < ActiveRecord::Migration[6.1]
  def change
    create_table :buyers do |t|
      t.integer :item_id
      t.integer :user_id
      t.integer :sale_id
      t.float :buy_price
      t.string :buy_time
      t.timestamps
    end
  end
end
