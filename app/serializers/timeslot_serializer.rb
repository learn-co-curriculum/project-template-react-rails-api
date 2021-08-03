class TimeslotSerializer < ActiveModel::Serializer
    attributes :id, :worker_id, :date_time
  
  end