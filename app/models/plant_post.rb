class PlantPost < ApplicationRecord
  belongs_to :user
  has_many :reviews, dependent: :destroy
  has_many :reviewed_users, :through => :reviews, :source => :users

  validates :state, :image, :plant_name,:user_id, presence: true
end



