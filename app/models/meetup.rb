class Meetup < ApplicationRecord
  belongs_to :foster
  belongs_to :applicant
  belongs_to :admin
end
