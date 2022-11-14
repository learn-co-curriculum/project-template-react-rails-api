class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :length, :name, :equipment, :review
end
