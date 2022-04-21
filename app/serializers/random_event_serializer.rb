class RandomEventSerializer < ActiveModel::Serializer
  attributes :id, :situation, :prompt_1, :prompt_2, :effect_1, :effect_2, :imageurl
end
