class RemoveListOfIngredientsFromMeals < ActiveRecord::Migration[6.1]
    def change
      remove_column :meals, :list_of_ingredients, :string
    end
  end