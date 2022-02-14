class SessionsController < ApplicationController

    def create
       if (Owner.find_by(email: params[:email]))
            owner = Owner.find_by(email: params[:email]
            session[:owner_id] = owner.id
        elsif (Provider.find_by(email: params[:email])
            provider = Provider.find_by(email: params[:email]
            session[:provider_id] = provider.id
       end
    end
    
end
