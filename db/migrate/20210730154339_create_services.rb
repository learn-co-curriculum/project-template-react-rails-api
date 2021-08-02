class CreateServices < ActiveRecord::Migration[6.1]
  def change
    create_table :services do |t|
    t.integer :worker_id  
    t.string :service 
    t.integer :price 

      t.timestamps
    end
  end
end
