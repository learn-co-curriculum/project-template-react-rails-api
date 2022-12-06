class FoodSerializer < ActiveModel::Serializer
  attributes :id, :name, :weight, :calories, :user, :created_at 
  has_one :user
end
