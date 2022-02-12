class CreateBookings < ActiveRecord::Migration[6.1]
  def change
    create_table :bookings do |t|
      t.integer :provider_id
      t.integer :task_id
      t.datetime :date
      t.float :price
      t.timestamps
    end
  end
end
