Rails.application.routes.draw do
  
  resources :characters
  resources :users
  resources :outfits
  resources :spells
  resources :minions
  resources :equipment
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
