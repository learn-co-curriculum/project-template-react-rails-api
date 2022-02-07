Rails.application.routes.draw do
  resources :applicants
  resources :fosters
  resources :meetups
  resources :pet_applications
  resources :pet_fosters
  resources :pets
  resources :users

  # for user authentication
  post "/signup", to: "users#create"
  get "/me", to: "users#me" # "/auth" in ix's lecture - https://learning.flatironschool.com/courses/4552/pages/video-authorization-client?module_item_id=346181
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # for meetups
  get "/meetups/applicant/:id", to: "meetups#show_applicant"
  get "/meetups/foster/:id", to: "meetups#show_foster"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
