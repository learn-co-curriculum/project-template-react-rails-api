class FoodSerializer < ActiveModel::Serializer
  attributes :id, :name, :weight, :calories, :user 
  has_one :user 
end
