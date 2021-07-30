class CreatePressOns < ActiveRecord::Migration[6.1]
  def change
    create_table :press_ons do |t|
      t.string :name
      t.string :shape
      t.string :color
      t.string :add_on
      t.text :description
      t.float :price
      t.integer :quantity

      t.timestamps
    end
  end
end
