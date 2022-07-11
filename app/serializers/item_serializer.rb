class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image_url, :starting_bid, :starting_time, :closing_time
  has_one :user
end
