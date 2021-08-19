class CreateFriendships < ActiveRecord::Migration[6.1]
  def change
    create_table :friendships do |t|
      t.integer :friend_a_id, null: false, foreign_key: true
      t.integer :friend_b_id, null: false, foreign_key: true

      t.timestamps
    end
  end
end
