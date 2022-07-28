class CreateReservationTypes < ActiveRecord::Migration[6.1]
  def change
    create_table :reservation_types do |t|
      t.string :reservation_type

      t.timestamps
    end
  end
end
