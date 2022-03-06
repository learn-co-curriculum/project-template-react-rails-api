Rails.application.routes.draw do
  
  resources :boardgames
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get '/authorized_user', to: "users#show"
  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#destroy'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
