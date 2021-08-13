class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :password, :fav_genre, :bio, :user_books

  def user_books
    object.shelves.map do |shelf|
      shelf.book
    end
  end
end
