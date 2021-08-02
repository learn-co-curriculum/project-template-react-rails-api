class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.integer :worker_id
      t.integer :customer_id
      t.datetime :time
      t.string :services
      t.integer :total_cost
      t.integer :tip
      t.integer :rating
      t.string :review
      t.string :status

      t.timestamps
    end
  end
end
