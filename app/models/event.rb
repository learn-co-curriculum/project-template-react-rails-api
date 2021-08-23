class Event < ApplicationRecord
    belongs_to :user 
    has_many :comments

    validates :title, presence: true
    validates :description, presence: true
    validates :category, presence: true
    validates :date, presence: true
    validates :start_time, presence: true
    validates :end_time, presence: true


end
