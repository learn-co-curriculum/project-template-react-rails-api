class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :book_id, :rating, :content
end
