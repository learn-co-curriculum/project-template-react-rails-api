class Post < ApplicationRecord
    has_many :comments, dependent: :destroy
    has_many :users, through: :comments

    # validates :description, presence: true
end
