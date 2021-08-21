class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :category, :date, :start_time, :end_time
end
