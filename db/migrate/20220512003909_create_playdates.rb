class CreatePlaydates < ActiveRecord::Migration[6.1]
  def change
    create_table :playdates do |t|
    t.string :location
    t.string :date
    t.integer :parent_id
    t.integer :user_id
    # belongs_to :user1, null: false, foreign_key: true
    # belongs_to :user2, null: false, foreign_key: true
      t.timestamps
    end
  end
end
