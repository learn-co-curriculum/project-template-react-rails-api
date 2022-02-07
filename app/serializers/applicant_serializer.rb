class ApplicantSerializer < ActiveModel::Serializer
  attributes :id, :firstName, :lastName, :dob, :email, :phone, :rent_own, :home_type, :length_address, :yard_description, :children, :pet_allergy, :approved, :lifestyle, :user_id
  has_many :pet_application
  has_many :meetup
end
