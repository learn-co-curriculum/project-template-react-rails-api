class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :name, :duration, :calories_burnt, :user, :created_at
  has_one :user
end
