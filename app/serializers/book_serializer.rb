class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :genre, :length, :pub_date, :image
end
