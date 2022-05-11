class Parent < ApplicationRecord
   has_many :playdates
    has_many :users, through: :playdates
end
