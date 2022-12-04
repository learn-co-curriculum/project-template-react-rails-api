class EmployeeSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :position, :department, :email, :password
end
