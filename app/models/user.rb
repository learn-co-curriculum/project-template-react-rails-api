class User < ApplicationRecord
    has_secure_password

    has_many :followed_users, foreign_key: :follower_id, class_name: "Relationship"
    has_many :followees, through: :followed_users, :dependent => :delete_all

    has_many :following_users, foreign_key: :followee_id, class_name: "Relationship"
    has_many :followers, through: :following_users, :dependent => :delete_all

    has_many :comments, as: :commentable

    has_many :user_projects
    has_many :projects, through: :user_projects
end
