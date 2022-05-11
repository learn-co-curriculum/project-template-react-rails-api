class UsersController < ApplicationController
    
    # GET "/users"
    def index 
        render json: User.all
    end 

    # GET "/users/:id"
    def show
        user = User.find(params[:id])
        render json: user, include: :tickets
    end
    
    # POST "/users"
    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    # PUT "/users/:id"
    def update
        user = User.find(params[:id])
        user.update!(user_params)
        render json: user, status: :created
    end

    # DELETE "/users/:id"
    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end

    private

    def user_params
        params.permit(:name, :email, :admin, :password)
    end
end