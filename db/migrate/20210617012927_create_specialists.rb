class CreateSpecialists < ActiveRecord::Migration[6.1]
  def change
    create_table :specialists do |t|
      t.string :image_url
      t.string :about_me
      t.string :language
      t.float :rating
      t.string :specialty 

      t.timestamps
    end
  end
end
