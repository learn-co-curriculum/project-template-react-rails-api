class Scraper

    Watir.default_timeout = 30

attr_reader :url, :browser, :text, :combined_hash

def initialize(item)
    @url = "https://shopping.google.com/search?q=#{item}"
    @browser = Watir::Browser.new(:chrome, headless: true)
    @browser.goto(url)
    wait_until_element_exists()
    @name = get_text("MPhl6c pqv9ne azTb0d ulfEhd YAEPj XkyFEf")
    @price = get_text("aZK3gc Lhpu7d")
    @storeName = get_text("SpKMTe")
    @combined_hash = combined
    @browser.close
end

def combined
    @price.map.with_index {|p, i| { price: p[1..-1].to_f, store: @storeName[i], name: @name[i] } }
end

def wait_until_element_exists()
    browser.element(class: "aZK3gc Lhpu7d").wait_until(&:exists?)
end

def get_text(css)
    browser.elements(class: css).map {|e| e.inner_text}
end
 

end

