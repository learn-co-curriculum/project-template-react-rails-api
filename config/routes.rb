Rails.application.routes.draw do
  resources :playdates, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:index, :show, :create, :update, :destroy]

  get '/authorized_user', to: 'users#show'


  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'
end
