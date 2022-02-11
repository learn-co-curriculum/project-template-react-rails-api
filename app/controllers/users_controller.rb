class UsersController < ApplicationController
    
    # GET /users
    def index
        render json: User.all.order(:id)
    end

    # GET /me
    # handles the auto-login and allows user to stay logged in when page refreshes
    def me
        user = User.find_by(id: session[:user_id])
        if user
            render json: user
        else
            render json: "No one is logged in", status: :unauthorized
        end
    end

    def show
        user = User.find(params[:id])
        render json: user
    end

    #POST /signup
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    # GET /users/:id
    def update
        user = User.find(params[:id])
        user.update!(user_params)
        render json: user, status: :ok
    end

    # DELETE /logout
    def destroy 
        user = User.find(params[:id])
        user.destroy 
        head :no_content 
    rescue ActiveRecord::RecordNotFound => error 
       render json: {error: error.message}, status: :not_found
    end


    private

    def user_params
        # The has_secure_password method also provides two new instance methods on your User model: password and password_confirmation. These methods don't correspond to database columns! Instead, to make these methods work, your users table must have a password_digest column.
        # password_confirmation will work and default to nil if not used.
        # coming from front end so using password and not password_digest.
        params.permit(:firstName, :lastName, :applicant_id, :email, :password, :role, :phone)
        # params.permit(:username, :email, :password, :password_confirmation, :type, :phone)
    end

end
