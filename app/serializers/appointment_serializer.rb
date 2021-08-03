class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :worker_id, :customer_id, :time, :services, :total_cost, :tip, :rating, :review, :status
  
  belongs_to :worker, serializer: WorkerSerializer
  belongs_to :customer, serializer: CustomerSerializer
end
