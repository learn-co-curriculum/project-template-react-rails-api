Rails.application.routes.draw do
  
  resources :appointments
 
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post '/signup', to: 'users#create'
  get '/auto-login', to: 'users#show'
  get '/providers', to: 'providers#index'
  post '/providers', to: 'providers#create'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
