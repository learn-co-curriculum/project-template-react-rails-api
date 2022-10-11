class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :blog_id
end
