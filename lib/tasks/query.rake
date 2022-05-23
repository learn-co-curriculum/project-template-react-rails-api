task query: :environment do
require 'google_search_results' 

params = {
  q: "Ambrosia Apples, 3 lb bag",
  location: "Bronx, New York, United States",
  hl: "en",
  gl: "us",
  google_domain: "google.com",
  api_key: "f367f85e3aba125e49a697520fb006ad46dd4eab2f66109272daea534a43a7d9"
}

# inline_products
# :shopping_results
# :organic_results

search = GoogleSearch.new(params)
hash_results = search.get_hash

byebug

end