class CreateOrderItems < ActiveRecord::Migration[6.1]
  def change
    create_table :order_items do |t|
      t.integer :order_id
      t.integer :item_id
      t.string :item_type
      t.timestamps
    end

    add_index :order_items, [:item_id, :item_type]
  end
end
