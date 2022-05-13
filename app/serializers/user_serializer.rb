class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :admin, :image, :name, :age, :emergency, :address, :nightOwl, :early

end
