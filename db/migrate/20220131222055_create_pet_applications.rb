class CreatePetApplications < ActiveRecord::Migration[6.1]
  def change
    create_table :pet_applications do |t|
      t.references :pet, null: false, foreign_key: true
      t.references :applicant, null: false, foreign_key: true
      t.string :applicant_email
      t.string :status

      t.timestamps
    end
  end
end
