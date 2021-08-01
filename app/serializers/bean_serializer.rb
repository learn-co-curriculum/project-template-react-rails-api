class BeanSerializer < ActiveModel::Serializer
  attributes :id, :name, :variety, :region, :roast, :quantity, :price

end
