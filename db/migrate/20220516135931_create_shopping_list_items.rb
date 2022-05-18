class CreateShoppingListItems < ActiveRecord::Migration[6.1]
  def change
    create_table :shopping_list_items do |t|
      t.integer :item_id
      t.integer :shopping_list_id

      t.timestamps
    end
  end
end
