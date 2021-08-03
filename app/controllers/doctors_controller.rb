class DoctorsController < ApplicationController

    def index
        doctors = Doctor.all
        render json: doctors
    end

    def show
        doctor = Doctor.find(params[:id])
        render json: doctor
    end

    def create
        doctor = Doctor.create(doctor_params)
        if doctor.valid?
            session[:role_id] = doctor.id
            render json: user, status: :created
        else
            render json: { errors: doctor.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def doctor_params
        params.permit(:first_name, :last_name)
    end

end
