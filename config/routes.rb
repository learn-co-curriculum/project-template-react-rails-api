Rails.application.routes.draw do
  resources :artists, only: [:index, :show]
  resources :tickets, only: :create
  resources :festivals
  post "/signup", to: 'users#create'
  post "/login", to: "sessions#create"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end