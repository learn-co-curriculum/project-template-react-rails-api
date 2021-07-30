class CreateGlues < ActiveRecord::Migration[6.1]
  def change
    create_table :glues do |t|
      t.string :name
      t.string :strength
      t.text :description
      t.float :price
      t.integer :quantity

      t.timestamps
    end
  end
end
