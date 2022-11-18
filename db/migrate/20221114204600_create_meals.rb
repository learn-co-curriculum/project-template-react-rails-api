class CreateMeals < ActiveRecord::Migration[6.1]
  def change
    create_table :meals do |t|
      t.string :name
      t.integer :calories
      t.string :reviews 
      t.string :list_of_ingredients
      t.timestamps
    end
  end
end
