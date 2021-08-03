class AddColumnsToDoctors < ActiveRecord::Migration[6.1]
  def change
    change_table :doctors do |t|
      t.string :img_url
      t.string :phone_number
      t.string :bio
      t.string :city
      t.string :specialty
      t.float :rating
      t.integer :years_of_experience
    end
  end
end
