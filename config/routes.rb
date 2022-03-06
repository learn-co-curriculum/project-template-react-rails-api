Rails.application.routes.draw do
  
  resources :boardgames
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  post '/login', to: 'sessions#login'
  get '/authorized_user', to: 'users#show'
  delete '/logout', to: 'sessions#logout'

  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
