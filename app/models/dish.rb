class Dish < ApplicationRecord
    # :id, :name, :cuisine, :price, :image_url, :restaurant_name, :city_name
<<<<<<< HEAD
    has_many :users, dependent: :destroy
    has_many :reviews, through: :users
    
=======
    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews
>>>>>>> 80fddbf2801f3dbc38a536304dd02189ba167df2
    validates :name, presence: true
    validates :cuisine, presence: true
    validates :price, numericality: true
    validates :restaurant_name, presence: true
    validates :image_url, presence: true
    validates :city_name, presence: true
end
