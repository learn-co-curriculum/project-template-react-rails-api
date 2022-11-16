Rails.application.routes.draw do
  
  resources :meals
  resources :workouts
  resources :reviews
  resources :users

  get "/me", to: "users#show"

  post "/login", to: "sessions#create"
  post "/register", to: "users#register"

  delete "/logout", to: "sessions#destroy"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
