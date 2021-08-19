class CreateChores < ActiveRecord::Migration[6.1]
  def change
    create_table :chores do |t|
      t.string :chore_name
      t.string :description
      t.integer :min_age
      t.belongs_to :household, null: false, foreign_key: true

      t.timestamps
    end
  end
end
