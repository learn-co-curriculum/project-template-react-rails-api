class Property < ApplicationRecord
  belongs_to :owner
  has_many :tasks
end
