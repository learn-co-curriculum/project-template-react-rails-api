class TodosController < ApplicationController
  wrap_parameters format: []

  def create
    todo = @current_user.todos.create!(todo_params)
    render json: todo, status: :created
  end

  def index
    todos = @current_user.todos.all
    render json: todos, status: :ok
  end

  def update
    todo = Todo.find_by(id: params[:id])
    todo.update!(todo_params)
    render json: todo, status: :ok
  end

  private

  def todo_params
    params.permit(:thing_to_do, :completed, :user_id, :event_id)
  end


end
