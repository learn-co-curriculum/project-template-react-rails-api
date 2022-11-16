class Band < ApplicationRecord
  has_many :concerts, dependent: :destroy
  has_many :venues, through: :concerts
  has_many :users, through: :concerts

end
