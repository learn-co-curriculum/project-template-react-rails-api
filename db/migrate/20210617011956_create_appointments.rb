class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.date :date
      t.time :time
      t.integer :user_id
      t.integer :psychologist_id
      t.integer :trainer_id

      t.timestamps
    end
  end
end
