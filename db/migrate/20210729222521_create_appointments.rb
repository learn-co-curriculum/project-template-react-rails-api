class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.integer :patient_id
      t.integer :doctor_id
      t.string :time
      t.boolean :patient_intake_complete
      t.boolean :appointment_complete

      t.timestamps
    end
  end
end
