Rails.application.routes.draw do
  
  resources :reviews, only: [:index, :show, :create, :delete]
  # resources :users 
  resources :locations, only: [:index, :show, :create, :delete]

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end


