class CreateChildChores < ActiveRecord::Migration[6.1]
  def change
    create_table :child_chores do |t|
      t.integer :reward
      t.integer :time_to_complete
      t.boolean :is_completed
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :chore, null: false, foreign_key: true

      t.timestamps
    end
  end
end
