class PatientSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :avatar_url, :full_name, :age, :address, :phone, :email
end
