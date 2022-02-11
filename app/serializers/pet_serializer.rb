class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :status, :image, :species, :breed, :age, :height, :weight, :fixed, :energy_level, :coat_type, :coat_color, :good_w_kids, :good_w_cats, :behavioral_issues, :description, :rabies_vaccine, :FVRCP_vaccine, :distemper_parvo_vaccine, :dewormed
  has_many :pet_foster
  has_many :foster, through: :pet_foster
end
