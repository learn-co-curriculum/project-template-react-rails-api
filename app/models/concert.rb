class Concert < ApplicationRecord
  belongs_to :band
  belongs_to :venue
  belongs_to :user

  def two_weeks
    self.where(:date > Date.today)
  end
end
