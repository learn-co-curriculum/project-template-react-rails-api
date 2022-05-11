Rails.application.routes.draw do
  resources :parents, only: [:index, :show]

  resources :users, only: [:show, :create, :update, :destroy]

  post "/login", to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'
end
