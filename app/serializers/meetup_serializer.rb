class MeetupSerializer < ActiveModel::Serializer
  attributes :id, :date, :time, :location, :reason
  belongs_to :foster
  belongs_to :applicant
end
