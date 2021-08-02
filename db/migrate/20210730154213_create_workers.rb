class CreateWorkers < ActiveRecord::Migration[6.1]
  def change
    create_table :workers do |t|
      t.string :name  
      t.string :image_url
      t.integer :location  
      t.integer :average_rating 
      t.integer :earnings 
      t.string :description 

      t.timestamps
    end
  end
end
