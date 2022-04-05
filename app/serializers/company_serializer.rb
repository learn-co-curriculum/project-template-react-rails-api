class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :sector, :performance_over_time
end
