Rails.application.routes.draw do
  resources :artists, only: [:index, :show, :schedule]
  resources :tickets, only: :create
  resources :festivals
  resources :users, only: [:show, :create]
  
  post "/signup", to: 'users#create'
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/schedule/avalanche", to: "artists#avalanche"
  get "/schedule/broncos", to: "artists#broncos"
  get "/schedule/nuggets", to: "artists#nuggets"
  get "/schedule/rockies", to: "artists#rockies"


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end