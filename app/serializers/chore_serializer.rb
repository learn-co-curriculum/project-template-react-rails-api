class ChoreSerializer < ActiveModel::Serializer
  attributes :id, :chore_name, :description, :min_age
  has_one :household
  has_many :child_chores
end
