class BudgetsController < ApplicationController
  wrap_parameters format: []

  def create
    buget = @current_user.budgets.create!(budget_params)
    render json: todo, status: :created
  end

  def index
    budgets = @current_user.budgets.all
    render json: budgets, status: :ok
  end

  def update
    budget = Budget.find_by(id: params[:id])
    budget.update!(budget_params)
    render json: budget, status: :ok
  end



  private

  def budget_params
    params.permit(:target_budget, :total_actual, :total_paid, :user_id, :event_id)
  end

end
