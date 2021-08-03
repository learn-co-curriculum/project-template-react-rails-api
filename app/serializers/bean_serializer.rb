class BeanSerializer < ActiveModel::Serializer
  attributes :id, :name, :variety, :region, :roast, :quantity, :price, :img_url

  has_many :order_items, as: :item
  has_many :orders, through: :order_items, as: :item
end
