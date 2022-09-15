class ProviderSerializer < ActiveModel::Serializer
  attributes :id, :name, :specialty, :location, :provider_avatar_url
end
