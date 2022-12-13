class ClientSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password_digest, :phone, :image
end
