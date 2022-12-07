class BookReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :year, :description

  has_many :reviews
end
