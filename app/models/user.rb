class User < ApplicationRecord
  has_many :concerts, dependent: :destroy
  has_many :bands, through: :concerts

  validates_presence_of :username, :email, :password, :first_name, :last_name, :location
  validates_uniqueness_of :username, :email

  has_secure_password


    # def upcoming_concerts
    #     self.concerts.where(:date min: Date.today )
    # end

end
