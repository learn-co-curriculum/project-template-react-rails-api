class UserCategory < ApplicationRecord
    belongs_to :user
    belongs_to :category
end
