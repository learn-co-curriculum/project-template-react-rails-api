class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :message
  
end
