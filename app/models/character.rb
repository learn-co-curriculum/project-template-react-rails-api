class Character < ApplicationRecord
    validates :charClass, presence: :true
    belongs_to :user
    has_many :items, dependent: :destroy
end
