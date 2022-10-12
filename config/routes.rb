Rails.application.routes.draw do
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  resources :users
  resources :blogs
  resources :comments
  resources :categories

  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
end
