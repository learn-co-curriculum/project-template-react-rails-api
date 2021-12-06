Rails.application.routes.draw do
  
  resources :questions
  resources :game_instances
  resources :users
  resources :avatars

  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
