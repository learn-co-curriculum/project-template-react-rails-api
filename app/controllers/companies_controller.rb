class CompaniesController < ApplicationController

    before_action :authorize

    def index
        render json: Company.all
    end

    def show 
        company = Company.find(params[:id])
        render json: company
    end

end
