class UserProjectSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :project
end
