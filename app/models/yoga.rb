class Yoga < ApplicationRecord
  has_many :trainees, dependent: :destroy
end
