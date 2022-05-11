class ParentsController < ApplicationController

    before_action :is_admin, only: [:create, :destroy, :update]


    def index 
        render json: Parent.all
    end 


    def show
        parent = Parent.find(params[:id])
        render json: parent, include: :parent_roles
    end


    def create
        parent = Parent.create!(parent_params)
        render json: parent, status: :created
    end


    def update
        parent = Parent.find(params[:id])
        parent.update!(parent_params)
        render json: parent, status: :created
    end


    def destroy
        parent = Parent.find(params[:id])
        parent.destroy
        head :no_content
    end

    private

    def parent_params
        params.permit(:id, :image, :name, :kids, :age, :emergency, :location, :nightOwl, :verified, :early)
    end
end