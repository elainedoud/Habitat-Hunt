Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  get "/listing", to: "listings#index"
  get "/category", to: "categories#index"
  post "/create", to: "listings#create"

end
