class ServiceSerializer < ActiveModel::Serializer
    attributes :id, :worker_id, :service, :price
  end
  