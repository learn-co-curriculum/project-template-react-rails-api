class CreateAttendees < ActiveRecord::Migration[6.1]
  def change
    create_table :attendees do |t|
      t.string :name
      t.belongs_to :event, foreign_key: true, null: false 
      t.belongs_to :user, foreign_key: true, null: false

      t.timestamps
    end
  end
end
