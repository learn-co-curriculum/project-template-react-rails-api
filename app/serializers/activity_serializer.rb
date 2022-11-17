class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :organization, :activity_name, :activity_description, :image
end
