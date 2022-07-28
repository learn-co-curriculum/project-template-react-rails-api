class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :datetime_start, :datetime_end
  has_one :booking_type
  has_one :resource
  has_one :user
end
