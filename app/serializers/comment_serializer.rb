class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment

  belongs_to :user
end
