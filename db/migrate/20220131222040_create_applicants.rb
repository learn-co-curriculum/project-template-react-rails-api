class CreateApplicants < ActiveRecord::Migration[6.1]
  def change
    create_table :applicants do |t|
      t.string :firstName
      t.string :lastName
      t.string :dob
      t.string :email
      t.string :phone
      t.string :rent_own
      t.string :home_type
      t.string :length_address
      t.text :yard_description
      t.string :children
      t.string :pet_allergy
      t.boolean :approved
      t.text :lifestyle
      t.integer :user_id

      t.timestamps
    end
  end
end
