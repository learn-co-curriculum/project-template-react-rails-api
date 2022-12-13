class ChefSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password_digest, :phone, :image, :cuisine, :last_job
end
