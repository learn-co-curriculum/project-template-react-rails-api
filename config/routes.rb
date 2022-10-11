Rails.application.routes.draw do
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  resources :users
  resources :blogs
  resources :comments

  post "/login", to: "sessions#create"
end
