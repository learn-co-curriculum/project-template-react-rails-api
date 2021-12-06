class CreateGameInstances < ActiveRecord::Migration[6.1]
  def change
    create_table :game_instances do |t|
      t.integer :score
      t.belongs_to :user

      t.timestamps
    end
  end
end
