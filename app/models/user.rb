class User < ApplicationRecord
<<<<<<< HEAD
  belongs_to :review
  belongs_to :dish
  
  validates :name, presence: true
=======
  has_many :reviews, dependent: :destroy
  has_many :dishes, through: :reviews
  validates :username, presence: true, uniqueness:true
  has_secure_password
>>>>>>> 80fddbf2801f3dbc38a536304dd02189ba167df2
end
