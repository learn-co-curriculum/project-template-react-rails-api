class CreateExercises < ActiveRecord::Migration[6.1]
  def change
    create_table :exercises do |t|
      t.string :name
      t.integer :duration
      t.integer :calories_burnt
      t.belongs_to :user
      t.timestamps 
    end
  end
end
