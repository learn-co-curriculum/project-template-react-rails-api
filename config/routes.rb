Rails.application.routes.draw do
  
  resources :servies, :customers, :timeslot, :users, :appointments, :workers
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  # get '/signin', to: 'session'
end
