Rails.application.routes.draw do
  
  resources :orders
  resources :reservations
  resources :restaurants
  resources :menus
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
   post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  post '/login', to: 'sessions#create'
  post '/logout', to: 'sessions#destroy'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
