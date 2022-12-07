class Food < ApplicationRecord
    belongs_to :user

    validates :calories, presence: true, numericality: { only_integer: true }
    validates :name, presence: true
    validates :weight, presence: true, numericality: { only_integer: true }
end
