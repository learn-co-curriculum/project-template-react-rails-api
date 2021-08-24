class Chore < ApplicationRecord
  belongs_to :household
  has_many :child_chores, dependent: :destroy
  has_many :users, through: :child_chores

  validates :chore_name, presence: true
end
