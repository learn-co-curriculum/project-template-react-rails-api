require "rails_helper"

RSpec.describe AppointmentsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/appointments").to route_to("appointments#index")
    end

    it "routes to #show" do
      expect(get: "/appointments/1").to route_to("appointments#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/appointments").to route_to("appointments#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/appointments/1").to route_to("appointments#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/appointments/1").to route_to("appointments#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/appointments/1").to route_to("appointments#destroy", id: "1")
    end
  end
end
