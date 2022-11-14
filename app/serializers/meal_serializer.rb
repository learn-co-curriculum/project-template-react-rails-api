class MealSerializer < ActiveModel::Serializer
  attributes :id, :name, :calories, :review, :list_of_ingredients
end
