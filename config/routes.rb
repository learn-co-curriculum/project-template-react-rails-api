Rails.application.routes.draw do
  
  resources :likes, only: [:create, :index, :show]
  resources :matches, only: [:index, :show, :destroy]
  resources :users

  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  #TODO login and delete profile should be in session

  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#destroy"

  #Like model route
  post "/likeProfile", to: "likes#like_profile"
  post "/dislikedProfile", to: "likes#disliked_profile"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
