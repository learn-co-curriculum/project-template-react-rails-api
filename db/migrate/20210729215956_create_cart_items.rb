class CreateCartItems < ActiveRecord::Migration[6.1]
  def change
    create_table :cart_items do |t|
      t.integer :shopping_cart_id
      t.integer :item_id
      t.string :item_type

      t.timestamps
    end

    add_index :cart_items, [:item_id, :item_type]
  end
end
