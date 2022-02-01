class CreatePetFosters < ActiveRecord::Migration[6.1]
  def change
    create_table :pet_fosters do |t|
      t.references :pet, null: false, foreign_key: true
      t.references :foster, null: false, foreign_key: true
      t.boolean :active

      t.timestamps
    end
  end
end
