class DoctorSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :img_url, :phone_number, :bio, :city, :specialty, :rating, :years_of_experience

  has_one :user
end
