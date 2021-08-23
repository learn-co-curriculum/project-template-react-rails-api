class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :username
  has_one :dish

  def username
    object.user.username
  end
end
