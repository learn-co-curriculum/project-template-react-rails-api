class AddMuscleGroupAndTypeAndDifficultyToWorkouts < ActiveRecord::Migration[6.1]
  def change
    add_column :workouts, :muscle, :string
    add_column :workouts, :type, :string
    add_column :workouts, :difficulty, :string
  end
end
