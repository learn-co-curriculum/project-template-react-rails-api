class PostSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :description, :tag, :user_id, :user_data
  belongs_to :users

  def user_data
    User.find_by(id: object.user_id)
  end

end
