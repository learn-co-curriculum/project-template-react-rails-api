class Band < ApplicationRecord
  has_many :concerts
  has_many :venues, through: :concerts
  has_many :users, through: :concerts
end
