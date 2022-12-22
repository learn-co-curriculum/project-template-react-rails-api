Rails.application.routes.draw do

  resources :comments
  resources :posts, only: [:create, :index, :show]
  resources :users, only: [:index, :create, :show]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
