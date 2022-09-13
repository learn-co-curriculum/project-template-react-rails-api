class Festival < ApplicationRecord
    has_many :artists
    has_many :tickets
    has_many :users, through: :tickets
end
