class CreatePetApplications < ActiveRecord::Migration[6.1]
  def change
    create_table :pet_applications do |t|

      t.timestamps
    end
  end
end
