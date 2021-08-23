class Chore < ApplicationRecord
  belongs_to :household
  has_many :child_chores, dependent: :destroy

  validates :chore_name, presence: true
end
