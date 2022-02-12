Rails.application.routes.draw do
  
  resources :services
  resources :tasks
  resources :bookings
  resources :provider_services
  resources :owners
  resources :providers
  resources :properties
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
