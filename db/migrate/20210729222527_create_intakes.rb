class CreateIntakes < ActiveRecord::Migration[6.1]
  def change
    create_table :intakes do |t|
      t.integer :appointment_id
      t.string :onset
      t.string :location
      t.string :duration
      t.string :characteristics
      t.string :aggravating_factors
      t.string :relieving_factors
      t.string :timing_and_severity
      t.string :blood_pressure
      t.float :bmi
      t.string :weight
      t.string :height
      t.float :temperature
      t.integer :pulse
      t.integer :oxygen_saturation
      t.string :bsa
      t.string :doctor_notes

      t.timestamps
    end
  end
end
