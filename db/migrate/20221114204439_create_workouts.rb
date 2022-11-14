class CreateWorkouts < ActiveRecord::Migration[6.1]
  def change
    create_table :workouts do |t|
      t.string :length
      t.string :name
      t.string :equipment
      t.string :review

      t.timestamps
    end
  end
end
