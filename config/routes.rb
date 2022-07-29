Rails.application.routes.draw do
  resources :user_types
  resources :reservation_types
  resources :reservations
  resources :sports_types
  resources :resources
  resources :users
  resources :rec_centers

  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path",
      to: "fallback#index",
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
