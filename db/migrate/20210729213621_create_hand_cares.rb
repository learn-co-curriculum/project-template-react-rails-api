class CreateHandCares < ActiveRecord::Migration[6.1]
  def change
    create_table :hand_cares do |t|
      t.string :name
      t.text :image
      t.text :description
      t.float :price
      t.integer :quantity

      t.timestamps
    end
  end
end
