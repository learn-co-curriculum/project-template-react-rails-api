class CreateSignups < ActiveRecord::Migration[6.1]
  def change
    create_table :signups do |t|
      t.belongs_to :volunteer, null: false, foreign_key: true
      t.belongs_to :activity, null: false, foreign_key: true
      t.string :dateTime

      t.timestamps
    end
  end
end
