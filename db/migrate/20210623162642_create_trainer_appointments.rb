class CreateTrainerAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :trainer_appointments do |t|
      t.string :subject
      t.datetime :start_time
      t.datetime :end_time
      t.integer :user_id
      t.integer :trainer_id

      t.timestamps
    end
  end
end
