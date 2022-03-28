Rails.application.routes.draw do
  
  resources :order_items, only: [:index, :create, :destroy]
  resources :orders
  resources :menu_items
  resources :menus, only: [:index] 
  resources :restaurants, only: [:index, :show]
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
