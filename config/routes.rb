Rails.application.routes.draw do
  
  resources :users
  resources :payments
  resources :shopping_carts
  resources :cart_items
  resources :nail_cares
  resources :glues
  resources :press_ons
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
