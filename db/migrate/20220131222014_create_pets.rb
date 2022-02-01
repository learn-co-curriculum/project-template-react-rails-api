class CreatePets < ActiveRecord::Migration[6.1]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :status
      t.string :species
      t.string :breed, null: true
      t.string :age, null: true
      t.integer :height, null: true
      t.integer :weight, null: true
      t.boolean :fixed, null: true
      t.string :energy_level, null: true
      t.string :coat_type, null: true
      t.boolean :good_w_kids, null: true
      t.boolean :good_w_cats, null: true
      t.boolean :behavioral_issues, null: true
      t.text :description, null: true
      t.string :rabies_vaccine, null: true
      t.string :FVRCP_vaccine, null: true
      t.string :distemper_parvo_vaccine, null: true
      t.boolean :dewormed, null: true

      t.timestamps
    end
  end
end
