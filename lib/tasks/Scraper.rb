class Scraper
attr_reader :url, :browser, :text

def initialize(url, css)
    @url = url
    @browser = Watir::Browser.new(:chrome, headless: true)
    @browser.goto(url)
    wait_until_element_exists(css)
    @text = get_text(css)
end

def wait_until_element_exists(css)
    browser.element(class: css).wait_until(&:exists?)
end

def get_text(css)
    browser.elements(class: css).map {|e| e.inner_text}
end
 # `https://shopping.google.com/search?q=snickers`

end

