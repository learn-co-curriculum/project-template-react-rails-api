class CreateDrinks < ActiveRecord::Migration[6.1]
  def change
    create_table :drinks do |t|
      t.string :type
      t.string :milk
      t.boolean :sugar
      t.boolean :iced
      t.string :size
      t.float :price
      t.integer :quantity
      t.timestamps
    end
  end
end
