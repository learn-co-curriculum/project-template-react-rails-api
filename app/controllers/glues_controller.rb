class GluesController < ApplicationController
    def index
        glues = Glue.all
        render json: glues
    end
end
