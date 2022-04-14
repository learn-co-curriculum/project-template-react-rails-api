class Company < ApplicationRecord
    has_many :user_stocks, dependent: :destroy
    has_many :users, through: :user_stocks, dependent: :destroy

    

end
