
require 'pry'
require 'uri'
require 'net/http'
require 'openssl'

STATES = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas',
'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington','West Virginia', 'Wisconsin', 'Wyoming']

STATES.each do |state|
    State.find_or_create_by(name: state)
end

State.all.each do |state|
    url = URI("https://trailapi-trailapi.p.rapidapi.com/activity/?limit=25&q-state_cont=#{state.name}&q-activities_activity_type_name_eq=hiking")
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE
    request = Net::HTTP::Get.new(url)
    request["X-RapidAPI-Key"] = '68401ebe54msh8af2606513d710bp1b21b0jsn49f916645636'
    request["X-RapidAPI-Host"] = 'trailapi-trailapi.p.rapidapi.com'
    response = http.request(request)
    ap response.read_body
    json = JSON.parse response.body

    json.each do |x, y|
         trail = Trail.find_or_create_by(
            name: y["name"],
            city: y["city"],
            state_id: state.id,
            description: y["description"],
            directions: y["directions"],
            latitude: y["lat"].to_f,
            longitude: y["lon"].to_f,
            length: y["activities"]["hiking"]["length"]
         )
    
    end

end




binding.pry
