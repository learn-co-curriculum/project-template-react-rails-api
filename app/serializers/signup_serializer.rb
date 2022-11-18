class SignupSerializer < ActiveModel::Serializer
  attributes :id, :dateTime, :activity_id
  has_one :volunteer
  has_one :activity
end
