class CreateConcerts < ActiveRecord::Migration[6.1]
  def change
    create_table :concerts do |t|
      t.text :comment
      t.integer :tickets_remaining
      t.date :date
      t.belongs_to :band, null: false, foreign_key: true
      t.belongs_to :venue, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
