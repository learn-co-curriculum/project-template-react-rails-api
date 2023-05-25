class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :bio, :image, :contacts, :address, :user_id
end
