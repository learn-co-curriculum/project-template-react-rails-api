class Project < ApplicationRecord
  # belongs_to :user

  has_many :comments, as: :commentable

  has_many :user_projects
  has_many :users, through: :user_projects
end
