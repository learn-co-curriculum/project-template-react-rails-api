class CustomerSerializer < ActiveModel::Serializer
    attributes :id, :name, :image_url, :location, :budget, :description, :created_at, :updated_at
  end
  