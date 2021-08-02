class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :role_type

  belongs_to :role
end
