class ManagerSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :position, :email, :password

end
