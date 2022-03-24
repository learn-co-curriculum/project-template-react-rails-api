Rails.application.routes.draw do
  
  resources :order_items
  resources :orders
  resources :menu_items
  resources :menus
  resources :restaurants
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
