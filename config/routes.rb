Rails.application.routes.draw do
  
  resources :questions, only [:index]
  resources :game_instances, only [:index, :show, :create, :delete]
  resources :users
  resources :avatars, only [:index, :show]

  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
