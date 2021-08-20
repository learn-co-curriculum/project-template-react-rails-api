class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :email, :username, :password_digest, :is_parent
  has_one :household
  has_many :child_chores
  has_many :chores, through: :child_chores


  
end
