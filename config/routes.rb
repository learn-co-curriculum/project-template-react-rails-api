Rails.application.routes.draw do
 
    resources :user_stocks
    resources :companies, only: [:index, :show, :create]
    resources :users
    post "/signup", to: "users#create"
    post "/login", to: "sessions#login"
    delete "/logout", to: "sessions#logout"
    get "/current_user", to: "users#show"
    


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
