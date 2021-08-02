class CreateTimeslots < ActiveRecord::Migration[6.1]
  def change
    create_table :timeslots do |t|
      t.integer :worker_id 
      t.datetime :date_time 

      t.timestamps
    end
  end
end
