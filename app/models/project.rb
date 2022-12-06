class Project < ApplicationRecord
    belongs_to :manager
    belongs_to :employee
    has_many :tasks
end
