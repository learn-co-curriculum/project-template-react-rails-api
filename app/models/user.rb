class User < ApplicationRecord
    belongs_to :avatar
    has_many :game_instances
end
