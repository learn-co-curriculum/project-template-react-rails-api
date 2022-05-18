class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.string :image
      t.float :price
      t.integer :quantity, :default => 1
      t.timestamps
    end
  end
end
