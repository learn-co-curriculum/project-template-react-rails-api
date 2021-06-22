class User < ApplicationRecord
	has_many :calendar
	has_many :events, through: :calendar
end
