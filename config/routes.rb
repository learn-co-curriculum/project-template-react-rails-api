Rails.application.routes.draw do
  resources :chores, only: [:index, :create, :destroy]
  resources :child_chores, only: [:show, :create, :update, :destroy]
  resources :households
  resources :users
  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
