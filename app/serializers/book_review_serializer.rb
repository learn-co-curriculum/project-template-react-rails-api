class BookReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :year, :genre, :description

  has_many :reviews
end
