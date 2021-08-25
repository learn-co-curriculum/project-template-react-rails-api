class CreateTodos < ActiveRecord::Migration[6.1]
  def change
    create_table :todos do |t|
      t.string :thing_to_do
      t.boolean :completed
      t.belongs_to :event, foreign_key: true, null: false 
      t.belongs_to :user, foreign_key: true, null: false

      t.timestamps
    end
  end
end
