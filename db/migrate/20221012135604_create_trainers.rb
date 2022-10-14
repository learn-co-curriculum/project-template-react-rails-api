class CreateTrainers < ActiveRecord::Migration[6.1]
  def change
    create_table :trainers do |t|
      t.string :name
      t.string :gender

      t.timestamps
    end
  end
end
