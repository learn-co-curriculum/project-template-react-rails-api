Rails.application.routes.draw do
  resources :user_types
  resources :reservation_types
  resources :reservations
  resources :sports_types
  resources :resources
  resources :users, only: [:index]
  resources :rec_centers, only: %i[show index] do
    resources :resources, only: %i[show index]
  end

  get "/admin/rec_centers/:rec_center_id/resources",
      to: "rec_centers#resources_index"
  get "/admin/rec_centers/:rec_center_id/reservations",
      to: "rec_centers#reservations_index"
  get "/admin/rec_centers/:rec_center_id/reservations/today",
      to: "rec_centers#reservations_today_index"
  get "/admin/rec_centers/:rec_center_id/reservations/:date",
      to: "rec_centers#reservations_by_date_index"

  #Authentication routes
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path",
      to: "fallback#index",
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
