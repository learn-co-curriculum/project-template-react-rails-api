class Dish < ApplicationRecord
    # :id, :name, :cuisine, :price, :image_url, :restaurant_name, :city_name
    has_many :users, dependent: :destroy
    has_many :reviews, through: :users
    
    validates :name, presence: true
    validates :cuisine, presence: true
    validates :price, numericality: true
    validates :restaurant_name, presence: true
    validates :image_url, presence: true
    validates :city_name, presence: true
end
