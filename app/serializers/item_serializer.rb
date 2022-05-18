class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :price, :quantity, :total_cost
  
end
