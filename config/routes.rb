Rails.application.routes.draw do
  # namespace :api do
  resources :users, only: [:create]
  resources :reviews, only: [:index, :create, :show, :destroy]
  resources :dishes, only: [:index, :create, :show, :destroy]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "/me", to: "users#show"
  post "/login", to: "session#create"
  delete '/logout', to: 'sessions#destroy'
  # end
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
