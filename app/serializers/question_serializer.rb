class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :prompt, :question, :answer
end
