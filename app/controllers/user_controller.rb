class UserController < ApplicationController

def create
	user = User.create(user_params
	if user.valid?
		payload = {user_id: user.id}
		token = encode_toke(payload)
		render json: {user: user, jwt: token}
	else
		render json:{errors: user.errors.full_messages}, status: :not_acceptable
	end
end

private 

def user_params
	params.permit(:username, :password)
end


