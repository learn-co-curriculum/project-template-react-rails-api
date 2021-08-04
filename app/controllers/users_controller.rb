class UsersController < ApplicationController

    def index
        users = User.all
        render json: users
    end

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        user = User.find_by(id: session[:user_id])
        # user = User.find(params[:id])
        if user
            render json: user
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def upcoming_appointments
        # user = User.find_by(id: session[:user_id])
        user = User.find(params[:id])
        upcoming_appointments = user.role.appointments.select { |appt| appt.appointment_complete == false }
        render json: upcoming_appointments
    end

    def past_appointments
        # user = User.find_by(id: session[:user_id])
        user = User.find(params[:id])
        past_appointments = user.role.appointments.select { |appt| appt.appointment_complete == true }
        render json: past_appointments
    end

    def my_patients
        # user = User.find_by(id: session[:user_id])
        user = User.find(params[:id])
        render json: user.role.patients.uniq
    rescue ActiveRecord::RecordInvalid => invalid
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def my_doctors
        # user = User.find_by(id: session[:user_id])
        user = User.find(params[:id])
        render json: user.role.doctors.uniq
    rescue ActiveRecord::RecordInvalid => invalid
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :role_id, :role_type)
    end

end
