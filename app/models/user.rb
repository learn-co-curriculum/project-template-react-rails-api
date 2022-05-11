class User < ApplicationRecord
    # https://api.rubyonrails.org/classes/ActiveModel/SecurePassword/ClassMethods.html
    has_secure_password
    has_many :parents
    # has_many :tickets
    # has_many :productions, through: :tickets
#     def create
#         user = User.create!(user_params)
#         render json: user, status: :created
#   end

#   private

#   def user_params
#     params.permit(:email, :name, :password, :password_confirmation)
#   end
   
#         patch "/Users" do
#         @login = User.find_by(username: params[:username])
#         if @login == nil
#         {:status => "error", :message => "invalid login"}.to_json
#         elsif @login.password == params[:password]
#         {:status => "OK", :message => "success!"}.to_json
#         else
#         {:status => "error", :message => "invalid login"}.to_json
#         end
#     end

#     put "/Users" do
#         @user = User.find_by(username: params[:username])
#         @event = Event.find(params[:event_id])
#         @check = Favorited_event.find_by(event_id: @event.id, user_id: @user.id)
#         if @check
#         @check.destroy
#         @event.guestAmounts +=1
#         @event.save
#         else
#         Favorited_event.create(
#             user_id: @user.id,
#             event_id: @event.id
#         )
#         @event.guestAmounts -=1
#         @event.save
#         end
#     end
    
#     get "/Users" do 
#         User.all.to_json
#       end
    validates :name, presence: true, uniqueness: true
    validates :email, format: /\w+@\w+\.{1}[a-zA-Z]{2,}/, presence: true, uniqueness: true
    validate :permitted_emails

    def permitted_emails
        unless email.match?(/gmail.com|yahoo.com|icloud.com|flatironschool.com/)
            errors.add(:permitted_emails, "I'm sorry that email is not permitted.")
        end
    end 
end