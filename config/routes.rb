Rails.application.routes.draw do
  resources :random_events
  resources :users
  get '/random', to: "random_events#show"
  delete '/character', to: "characters#destroy"
  delete '/item', to: "items#destroy"
  get "/items", to: "items#allItems"
  get "/character/", to: "characters#show"
  patch "/character/equip/trinket", to: "characters#equipTrinket"
  patch "/character/equip/weapon", to: "characters#equipWeapon"
  patch "/character/equip/armor", to: "characters#equipArmor"
  post "/item", to: "items#create"
  get "/enemy/", to: "enemies#find_by_level"
  post "/characters", to: "characters#create"
  get "/characters", to: "characters#allChars"
  post "/signup", to: "users#create"
  post "/login", to: "session#create"
  delete "/logout", to: "session#destroy"
  get "/me", to: "users#show"
  patch "/user", to: "users#update"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
