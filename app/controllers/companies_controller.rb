class CompaniesController < ApplicationController

    before_action :authorize

    def index
        render json: Company.all
    end

    def show 
        company = Company.find(params[:id])
        render json: company
    end

    def create
        current_user = User.find(session[:user_id])

        new_company = current_user.companies.build(company_params)

        if new_company
            new_company.save
            render json: new_company, status: :created, location: new_company
        else
            render json: new_company.errors, status: :unprocessable_entity
        end
    end
    

    private

    def company_params
        params.permit(:name, :symbol)
    end

end


