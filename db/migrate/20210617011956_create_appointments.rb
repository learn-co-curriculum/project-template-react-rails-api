class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.date :date
      t.time :time
      t.integer :user_id
      t.integer :specialist_id

      t.timestamps
    end
  end
end
