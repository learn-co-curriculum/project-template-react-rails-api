class CreateMenuItems < ActiveRecord::Migration[6.1]
  def change
    create_table :menu_items do |t|
      t.belongs_to :menu, null: false, foreign_key: true
      t.belongs_to :restaurant, null: false, foreign_key: true
      t.string :name
      t.float :price
      t.string :image_url
      t.string :description
      t.string :item_type

      t.timestamps
    end
  end
end
