class UserSerializer < ActiveModel::Serializer
  attributes :id, :email_address, :first_name, :last_name
  has_one :user_type
end
