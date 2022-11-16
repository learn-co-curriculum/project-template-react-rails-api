class PlantPostsController < ApplicationController
    # GET :Index /plant_posts (all users posts)
    def index 
        plantpost = PlantPost.all
        render json: plantpost, status: :ok
    end

    # GET :Show /plant_posts/:id (logged in user)
    def show 
        plantpost = PlantPost.find(params[:id])
        render json: plantpost, status: :ok
    end

    # POST :create /plant_posts/:id 
    def create
        plantpost = PlantPost.create!(plant_params) 
        render json: plantpost, status: :created
    end

    # PATCH :update /plant_posts/:id
    def update
        plantpost=PlantPost.find(params[:id])
        plantpost.update!(plant_params)
        render json: plantpost
    end

    # DELETE :destroy /plant_posts/:id
    def destroy
        plantpost=PlantPost.find(params[:id])
        plantpost.destroy
        head :no_content
        render json: plantpost
    end

    private

    def plant_params()
        params.permit(:image, :user_id, :plant_name, :indoor, :state, :pet_safe)
    end

end
    
