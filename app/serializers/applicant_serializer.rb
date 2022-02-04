class ApplicantSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :dob, :email, :phone, :rent_own, :home_type, :length_address, :yard_description, :children, :pet_allergy, :approved, :lifestyle
  has_many :pet_application
  has_many :meetup
end
