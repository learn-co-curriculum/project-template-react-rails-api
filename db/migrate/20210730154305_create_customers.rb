class CreateCustomers < ActiveRecord::Migration[6.1]
  def change
    create_table :customers do |t|
      t.string :name  
      t.string :image_url
      t.integer :location  
      t.integer :budget 
      t.string :description 


      t.timestamps
    end
  end
end
