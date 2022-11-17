class RemoveLengthFromWorkouts < ActiveRecord::Migration[6.1]
  def change
    remove_column :workouts, :length, :string
  end
end
