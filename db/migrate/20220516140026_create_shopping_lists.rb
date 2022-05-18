class CreateShoppingLists < ActiveRecord::Migration[6.1]
  def change
    create_table :shopping_lists do |t|
      t.integer :user_id
      t.string :name

      t.timestamps
    end
  end
end
