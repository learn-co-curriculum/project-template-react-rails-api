class CreateReservations < ActiveRecord::Migration[6.1]
  def change
    create_table :reservations do |t|
      t.belongs_to :reservation_type, null: false, foreign_key: true
      t.belongs_to :resource, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true
      t.datetime :datetime_start
      t.datetime :datetime_end

      t.timestamps
    end
  end
end
