class Item < ApplicationRecord
    has_many :sales
    validates :httpimage, presence: true
    validates :name, presence: true
end