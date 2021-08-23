class Review < ApplicationRecord
<<<<<<< HEAD
    has_many :users, dependent: :destroy
    has_many :dishes, through: :users
    
=======
    belongs_to :user
    belongs_to :dish
>>>>>>> 80fddbf2801f3dbc38a536304dd02189ba167df2
    validates :comment, presence: true
end
