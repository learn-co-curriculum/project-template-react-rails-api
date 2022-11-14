class User < ApplicationRecord
  has_many :concerts
  has_many :bands, through: :concerts
end
