class User < ApplicationRecord
  belongs_to :household
  has_many :chores, through: :household
  has_many :child_chores
end
