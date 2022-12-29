class PostUserSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :description, :tag, :user_data

  def user_data
    User.find_by(id: object.user_id)
  end
end
