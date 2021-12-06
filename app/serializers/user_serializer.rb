class UserSerializer < ActiveModel::Serializer
    attributes :id, :username, :email, :character
    # attributes :id, :username, :email, :character, :first_name, :last_name
end
