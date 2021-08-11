class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :password, :fav_genre, :bio 
end
