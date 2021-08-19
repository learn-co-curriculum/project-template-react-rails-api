class Chore < ApplicationRecord
  belongs_to :household
  has_many :child_chores
end
