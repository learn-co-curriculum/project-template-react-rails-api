Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins 'localhost:4000'  # replace with your frontend's origin
      resource '*',
        headers: :any,
        methods: [:get, :post, :put, :patch, :delete, :options, :head]
    end
  end
  