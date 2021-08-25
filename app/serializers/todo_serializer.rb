class TodoSerializer < ActiveModel::Serializer
  attributes :id, :thing_to_do, :completed
end
