class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :worker_id, :customer_id, :time, :services, :total_cost, :tip, :rating, :review, :status
end
