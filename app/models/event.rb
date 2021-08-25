class Event < ApplicationRecord
    belongs_to :user 
    has_many :comments, dependent: :destroy
    has_many :todos, dependent: :destroy
    has_many :budgets, dependent: :destroy
    has_many :attendees, dependent: :destroy

    validates :title, presence: true
    validates :description, presence: true
    validates :category, presence: true
    validates :date, presence: true
    validates :start_time, presence: true
    validates :end_time, presence: true


end
