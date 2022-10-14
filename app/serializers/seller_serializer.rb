class SellerSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :message

  has_many :properties
end
