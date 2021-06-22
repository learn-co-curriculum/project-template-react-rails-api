class CreateCalendars < ActiveRecord::Migration[6.1]
  def change
    create_table :calendars do |t|
      t.date :date
      t.string :events
      t.integer :user_id
      t.timestamps
    end
  end
end
