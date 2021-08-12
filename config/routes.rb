Rails.application.routes.draw do
  resources :users, only: [:index, :create]
  resources :books, only: [:index]
  resources :shelves, only: [:index]
  resources :reviews, only: [:index]
  resources :login, only: [:create]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
