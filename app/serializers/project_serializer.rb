class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :github, :title, :description
  has_one :user
end
