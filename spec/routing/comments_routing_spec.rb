require "rails_helper"

RSpec.describe CommentsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/comments").to route_to("comments#index")
    end

    it "routes to #show" do
      expect(get: "/comments/1").to route_to("comments#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/comments").to route_to("comments#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/comments/1").to route_to("comments#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/comments/1").to route_to("comments#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/comments/1").to route_to("comments#destroy", id: "1")
    end
  end
end
