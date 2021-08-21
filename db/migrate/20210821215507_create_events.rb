class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :title
      t.string :description
      t.string :category
      t.datetime :date
      t.string :start_time
      t.string :end_time

      t.belongs_to :user, foreign_key: true, null: false 
      t.timestamps
    end
  end
end
