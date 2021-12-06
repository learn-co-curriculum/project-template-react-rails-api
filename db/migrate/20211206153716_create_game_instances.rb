class CreateGameInstances < ActiveRecord::Migration[6.1]
  def change
    create_table :game_instances do |t|
      t.integer :score
      t.user :belongs_to

      t.timestamps
    end
  end
end
