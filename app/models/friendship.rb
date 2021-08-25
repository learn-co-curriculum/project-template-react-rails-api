class Friendship < ApplicationRecord
  belongs_to :friend_a, class_name: 'User'
  belongs_to :friend_b, class_name: 'User'


  # validates :friend_b_id, uniqueness: true
end
