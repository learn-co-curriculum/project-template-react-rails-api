class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :weight, :desired_weight, :bmi, :exercise, :therapy

  belongs_to :user 
end
