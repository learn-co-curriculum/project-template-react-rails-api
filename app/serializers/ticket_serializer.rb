class TicketSerializer < ActiveModel::Serializer
  attributes :id, :vip, :festival_id, :user_id, :quantity
end
