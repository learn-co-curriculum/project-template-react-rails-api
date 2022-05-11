class ParentSerializer < ActiveModel::Serializer
  attributes :id, :image, :name, :kids, :age, :emergency, :location, :nightOwl, :verified, :early
end
