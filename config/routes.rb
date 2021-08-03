Rails.application.routes.draw do
  
  resources :servies, :customers, :timeslot, :users, :appointments, :workers
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  # get '/signin', to: 'session'
end
