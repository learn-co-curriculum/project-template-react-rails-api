class Household < ApplicationRecord
    has_many :chores, dependent: :destroy
    has_many :users, dependent: :destroy
    has_many :child_chores, through: :chores
end
