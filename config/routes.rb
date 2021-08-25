Rails.application.routes.draw do
  resources :attendees
  resources :budgets
  resources :todos
  resources :comments
  resources :events, only: [:index, :show, :create]

  # resources :friendships, only: [:index]
  resources :users

  get "/friendships", to: "friendships#index"
  post "/friendships", to: "friendships#create"
  delete "/friendships/:friend_b_id", to: "friendships#destroy"
  

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
