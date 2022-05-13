class Playdate < ApplicationRecord
  # belongs_to :friend_one, :foreign_key => :user_id, :class_name => "User"
  # belongs_to :friend_two, :foreign_key => :friend_id, :class_name => "User"
    belongs_to :user_one, :foreign_key => :user_id, :class_name => "User"
    belongs_to :user_two, :foreign_key => :parent_id, :class_name => "User"
  end