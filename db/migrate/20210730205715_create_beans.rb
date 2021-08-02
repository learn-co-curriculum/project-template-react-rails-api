class CreateBeans < ActiveRecord::Migration[6.1]
  def change
    create_table :beans do |t|
      t.string :name
      t.string :type
      t.string :region
      t.string :roast
      t.integer :price
      
      t.timestamps
    end
  end
end
