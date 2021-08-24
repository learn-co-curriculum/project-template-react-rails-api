class HouseholdSerializer < ActiveModel::Serializer
  attributes :id, :last_name, :users, :chores
end
