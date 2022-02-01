class CreatePetFosters < ActiveRecord::Migration[6.1]
  def change
    create_table :pet_fosters do |t|

      t.timestamps
    end
  end
end
