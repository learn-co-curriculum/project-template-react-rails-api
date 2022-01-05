Rails.application.routes.draw do
  # namespace api: do
  
  resources :reviews, only: [:index, :show, :create, :destroy]
  # resources :users, only: [:index] 
  resources :locations, only: [:index, :show, :create, :destroy, :update]
  patch "/locations/:id/like", to: "locations#increment_likes"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index",
   constraints: ->(req) { !req.xhr? && 
   req.format.html? }

end


