class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create]

    def index
        render json: User.all
    end

    # GET /me
    # handles the auto-login and allows user to stay logged in when page refreshes
    def show
        # byebug
        render json: @current_user
    end

    #POST /signup
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def destroy
        user = find_user
        user.destroy!
        head :no_content
    end

    def update
        user = find_user
        user.update!(user_params)
        render json: user, status: :ok
    end

    private

    def user_params
        # The has_secure_password (Links to an external site.) method also provides two new instance methods on your User model: password and password_confirmation. These methods don't correspond to database columns! Instead, to make these methods work, your users table must have a password_digest column.
        params.permit(:username, :email, :password, :password_confirmation, :image_url, :bio)
    end

    def record_invalid(invalid)
        render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def find_user
        User.find(params[:id])
    end

end
