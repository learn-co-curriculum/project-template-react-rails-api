class Concert < ApplicationRecord
  belongs_to :band
  belongs_to :venue
  belongs_to :user

end
