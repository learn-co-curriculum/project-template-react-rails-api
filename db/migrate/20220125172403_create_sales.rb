class CreateSales < ActiveRecord::Migration[6.1]
  def change
    create_table :sales do |t|
      t.integer :seller_id
      t.integer :item_id
      t.float :bid
      t.float :starting_bid
      t.float :bid_time
      t.timestamps
    end
  end
end
