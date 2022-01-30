Rails.application.routes.draw do
  resources :user
  post "/login", to: "user#login"
  get "/relog", to: "user#relog"
  get "/userswsale/:id", to: "user#sales"
  get "/userswbuy/:id", to: "user#buys"
  get "/userswbuynsale/:id", to: "user#salesnbuys"
  get "/userbysale/:id", to: "user#userbysale"
  resources :item, only: [:create, :index, :show]
  resources :buyer, only: [:create, :update, :show, :destroy,]
  patch "/youwin/:id", to: "buyer#youwin"
  resources :sale
  patch "/bidtime/:id", to: "sale#updateBiding"
  get "/saleshighestBid/:id", to: "sale#findHighestBid"
  get "/salesUser", to: "sale#saleUser"
  resources :seller, only: [:show, :index]
  get "/sellermatchuser/:slid/:usid", to: "seller#sellermatchuser"
  # resources :user, only:  [:index] 
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
