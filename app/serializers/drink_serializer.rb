class DrinkSerializer < ActiveModel::Serializer
  attributes :id, :name, :img_url, :milk, :sugar, :iced, :size, :price, :quantity, :description

end
