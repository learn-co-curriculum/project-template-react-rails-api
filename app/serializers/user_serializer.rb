class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :age, :sex, :calories_goal, :created_at
  has_many :foods
  has_many :exercises
end
