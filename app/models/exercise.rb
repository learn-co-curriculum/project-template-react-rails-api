class Exercise < ApplicationRecord
    belongs_to :user

    validates :name, presence: true

    validates :duration, presence: true
    validates :duration, numericality: { only_integer: true }

    validates :calories_burnt, presence: true
    validates :calories_burnt, numericality: { only_integer: true }
    validates :calories_burnt, numericality: {greater_than_or_equal_to: 0 }

    # 11:48
end
