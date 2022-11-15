class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password, :first_name, :last_name, :favorite_band, :location, :genre_1, :genre_2, :genre_3

  has_many :concerts
end
