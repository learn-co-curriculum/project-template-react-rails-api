class User < ApplicationRecord
  has_many :concerts, dependent: :destroy
  has_many :bands, through: :concerts

  has_secure_password


    # def upcoming_concerts
    #     self.concerts.where(:date min: Date.today )
    # end

end
