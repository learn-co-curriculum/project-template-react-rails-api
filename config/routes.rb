Rails.application.routes.draw do
  
  resources :sessions, only: [:create, :destroy]
  # delete "/logout", to: "sessions#destroy"
  # post "/login", to: "sessions#create"
  
  
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

# does login go to sessions controller or user controller?