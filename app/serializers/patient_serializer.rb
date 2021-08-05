class PatientSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :img_url, :phone_number, :date_of_birth

  has_one :user
end
