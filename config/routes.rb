Rails.application.routes.draw do
  # resources :tickets, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:index, :show, :create, :update, :destroy]
  # resources :production_roles
  # resources :productions, only: [:index, :show, :destroy]
  resources :conversations, only: :messages
  # Group Activity => Add Route to Handle "sessions#login" (/login)
  # post '/login', to: sessions#login
  post "/login", to: 'sessions#login'
end