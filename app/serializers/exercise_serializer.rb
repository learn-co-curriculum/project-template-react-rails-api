class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :name, :duration, :calories_burnt, :user
  has_one :user
end
