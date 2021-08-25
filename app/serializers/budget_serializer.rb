class BudgetSerializer < ActiveModel::Serializer
  attributes :id, :target_budget, :total_actual, :total_paid
end
