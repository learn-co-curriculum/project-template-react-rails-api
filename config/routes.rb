Rails.application.routes.draw do
  resources :shopping_lists
  resources :shopping_list_items
  resources :items
  resources :users

  resources :users do
    resources :shopping_lists do 
      resources :shopping_list_items
    end
  end

  resources :items do
    resources :shopping_list_items
  end
 
  get '/query', to: "items#query"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  get '/cart', to: "sessions#cart"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
