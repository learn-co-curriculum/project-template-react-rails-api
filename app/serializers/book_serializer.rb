class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :year, :genre, :description

end
