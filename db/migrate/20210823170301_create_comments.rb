class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.belongs_to :event, foreign_key: true, null: false 
      t.belongs_to :user, foreign_key: true, null: false
      t.string :comment 
      t.timestamps
    end
  end
end
