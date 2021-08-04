Rails.application.routes.draw do
  # namespace :api do
    resources :intakes
    resources :appointments
    resources :doctors
    resources :patients
    resources :users
  # end

  #Sign up / User authorization routing
  post "/signup", to: "users#create"
  get "/me", to: "users#show" 
  post "/doctor-create", to: "doctors#create"
  post "/patient-create", to: "patients#create"

  #Log in / Log out routing and session control
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  #custom routing to view future/past appointments
  get "users/:id/upcoming_appointments", to: "users#upcoming_appointments"
  get "users/:id/past_appointments", to: "users#past_appointments"

  get "users/:id/doctors", to: "users#my_doctors"
  get "users/:id/patients", to: "users#my_patients"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
