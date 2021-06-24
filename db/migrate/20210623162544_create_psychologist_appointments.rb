class CreatePsychologistAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :psychologist_appointments do |t|
      t.string :subject
      t.datetime :startTime
      t.datetime :endTime    
      t.integer :user_id
      t.integer :psychologist_id

      t.timestamps
    end
  end
end
