class CreateBeans < ActiveRecord::Migration[6.1]
  def change
    create_table :beans do |t|
      t.string :name
      t.string :type
      t.string :region
      t.string :roast
      t.string :price
      t.integer :quantity
      t.timestamps
    end
  end
end
