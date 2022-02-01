class CreateMeetups < ActiveRecord::Migration[6.1]
  def change
    create_table :meetups do |t|
      t.date :date
      t.string :time
      t.string :location
      t.text :reason
      t.references :pet, null: false, foreign_key: true
      t.references :foster, null: false, foreign_key: true


      t.timestamps
    end
  end
end
