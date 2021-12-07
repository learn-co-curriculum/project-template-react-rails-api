class QuestionsController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index
        render json: Question.all
    end

end
