class User < ApplicationRecord
    has_secure_password
    # has_many :friendship_ones, :class_name => 'Friendship', :foreign_key => :friend_id
    # has_many :friend_ones, through: :friendship_ones
    # has_many :friendship_twos, :class_name => 'Friendship', :foreign_key => :user_id
    # has_many :friend_twos, through: :friendship_twos
    has_many :playdates_ones, :class_name => 'Playdate', :foreign_key => :parent_id
    has_many :user_ones, through: :playdate_ones
    has_many :playdates_twos, :class_name => 'Playdate', :foreign_key => :user_id
    has_many :user_twos, through: :playdate_twos
    # dependent: :destroy


    validates :name, presence: true, uniqueness: true
    validates :email, format: /\w+@\w+\.{1}[a-zA-Z]{2,}/, presence: true, uniqueness: true
    validate :permitted_emails

    def permitted_emails
        unless email.match?(/gmail.com|yahoo.com|icloud.com/)
            errors.add(:permitted_emails, "Sorry, that email isn't permitted.")
        end
    end 
end