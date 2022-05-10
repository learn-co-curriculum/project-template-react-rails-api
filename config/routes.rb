Rails.application.routes.draw do
  Rails.application.routes.draw do
    resources :kids, only [:index]
    resources :playdates 
    resources :parents
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
