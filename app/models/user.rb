class User < ApplicationRecord
  has_many :likes 
  has_many :matches, through: :likes

  
end
