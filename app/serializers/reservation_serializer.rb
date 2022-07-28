class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :datetime_start, :datetime_end
  has_one :reservation_type
  has_one :resource
  has_one :user
end
