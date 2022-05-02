Rails.application.routes.draw do
  resources :user_cities
  resources :categories
  resources :users
  get '/cities/search', to: 'cities#search'
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
