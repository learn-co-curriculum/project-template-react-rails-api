Rails.application.routes.draw do
  resources :comments
  resources :events, only: [:index, :show, :create]

  # resources :friendships, only: [:index]
  resources :users

  get "/friendships", to: "friendships#index"

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
