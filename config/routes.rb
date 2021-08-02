Rails.application.routes.draw do
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  resources :users, only: [:index]
  resources :carts, only: [:index]
  resources :orders, only: [:index]
  resources :beans, only: [:index]
  resources :drinks, only: [:index]

  post '/signup', to: 'users#create'
  get '/user', to: 'users#show'
  get '/drink/:id', to: 'drinks#show'
  get '/bean/:id', to: 'beans#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

end
