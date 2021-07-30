class CreateCartItems < ActiveRecord::Migration[6.1]
  def change
    create_table :cart_items do |t|
      t.integer :shoping_cart_id

      t.timestamps
    end
  end
end
