class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :email
  has_many :user_stocks
  has_many :companies
end
