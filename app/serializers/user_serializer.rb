class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password, :first_name, :last_name, :favorite_band, :location, :top_3_genres
end
