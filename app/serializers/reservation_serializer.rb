class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :restaurant_id, :menu_id, :seats
end
