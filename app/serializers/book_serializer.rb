class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :year, :description

end
