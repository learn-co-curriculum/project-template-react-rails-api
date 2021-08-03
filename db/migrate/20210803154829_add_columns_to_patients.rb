class AddColumnsToPatients < ActiveRecord::Migration[6.1]
  def change
    change_table :patients do |t|
      t.string :img_url
      t.string :phone_number
      t.string :date_of_birth
    end
  end
end
