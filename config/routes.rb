Rails.application.routes.draw do
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }


  get '/cart/:id', to: 'carts#show'
  post '/user/cart', to: 'carts#create'
  patch '/user/cart/:id', to: 'carts#update'
  post '/signup', to: 'users#create'

  patch '/order/:id', to: 'orders#update'


  get '/user', to: 'users#show'
  get '/user/:id', to: 'users#find_user'
  get 'user/orders', to: 'users#show_orders'

  get '/drink/:id', to: 'drinks#show'
  get '/bean/:id', to: 'beans#show'


  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'



  resources :users, only: [:index]
  resources :carts, only: [:index, :show, :create, :update]
  resources :orders, only: [:index, :show, :create]
  resources :beans, only: [:index]
  resources :drinks, only: [:index]
end
