class SessionsController < ApplicationController

    def create
       if (Owner.find_by(email: params[:email]))
            owner = Owner.find_by(email: params[:email]
            session[:owner_id] = owner.id
            render json: owner
        elsif (Provider.find_by(email: params[:email])
            provider = Provider.find_by(email: params[:email]
            session[:provider_id] = provider.id
            render json: provider
       end
    end

    def destroy
        session.delete { :owner_id ? :owner_id : :provider_id }
        head :no_content
    end

end
