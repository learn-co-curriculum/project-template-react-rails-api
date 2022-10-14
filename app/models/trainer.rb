class Trainer < ApplicationRecord
  has_one :yoga
  has_many :trainees, through: :yoga
end
