class TaskSerializer < ActiveModel::Serializer
  attributes :id, :description, :project_id
end
