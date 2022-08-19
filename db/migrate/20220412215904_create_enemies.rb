class CreateEnemies < ActiveRecord::Migration[6.1]
  def change
    create_table :enemies do |t|
      t.string :name
      t.integer :attack
      t.integer :level
      t.integer :defense
      t.string :sprite

      t.timestamps
    end
  end
end
