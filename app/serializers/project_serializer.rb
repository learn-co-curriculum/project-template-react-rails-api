class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :project_title, :start_date, :end_date, :goal, :steps
end
