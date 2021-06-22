class User < ApplicationRecord
	has_one :calendar
	has_many :events, through: :calendar
end
