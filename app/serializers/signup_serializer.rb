class SignupSerializer < ActiveModel::Serializer
  attributes :id, :date, :time
  has_one :volunteer
  has_one :activity
end
