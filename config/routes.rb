Rails.application.routes.draw do
  
  resources :users, only: [:create]
  resources :reviews, only: [:index, :create, :show, :destroy]
  resources :dishes, only: [:index, :create, :show, :destroy]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get '/logout', to: 'sessions#destroy'
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
