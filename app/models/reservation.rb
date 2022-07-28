class Reservation < ApplicationRecord
  belongs_to :reservation_type
  belongs_to :resource
  belongs_to :user
  validates :reservation_type_id, presence: true
  validates :resource_id, presence: true
  validates :user_id, presence: true
  validates :datetime_start, presence: true, uniqueness: { scope: :resource,
  message: "Only one booking allowed per resource at a time" } 
  validates :datetime_end, presence: true
end
