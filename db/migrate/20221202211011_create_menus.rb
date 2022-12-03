class CreateMenus < ActiveRecord::Migration[6.1]
  def change
    create_table :menus do |t|
      t.string :name
      t.string :description
      t.integer :restaurant_id
      t.integer :price
      t.string :img
      t.string :type

      t.timestamps
    end
  end
end
