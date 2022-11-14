class ConcertSerializer < ActiveModel::Serializer
  attributes :id, :comment, :tickets_remaining, :date
  has_one :band
  has_one :venue
  has_one :user
end
