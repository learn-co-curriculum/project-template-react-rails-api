class SellerSerializer < ActiveModel::Serializer
  attributes :id, :name, :email

  has_many :properties
end
