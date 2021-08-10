class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :book_id, :rating, :content
end
