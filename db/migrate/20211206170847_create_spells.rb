class CreateSpells < ActiveRecord::Migration[6.1]
  def change
    create_table :spells do |t|
      t.string :name
      t.string :image
      t.string :type
      t.string :effect
      t.string :range

      t.timestamps
    end
  end
end
