Rails.application.routes.draw do
  
#The resource: users, only: [: create] handles the user signing up. 
#The post “/login”, to: “auth#login” handles the login for an existing user in the database. 
#The get “/auto_login”, to: “auth#auto_login” handles the automatic login once a user is able to successfully sign up/login. 
#Finally, the get “/user_is_authed”, to: “auth#user_is_authed” is a route that can only be accessed if a user is authorized.

  resource :users, only: [:create]

  post "/login", to: "auth#login"
  get "/auto_login", to: "auth#auto_login"
  get "/user_is_authed", to: "auth#user_is_authed"



  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
