require 'rubygems'
require 'nokogiri'
require 'open-uri'
require 'yaml'

@names = []

def download_page(path)
  doc = Nokogiri::HTML(open('http://rubygems.org' + path))

  doc.css('.gems a').each do |link|
    url = link.attributes['href'].to_s
    name = url.match(/\/gems\/(.+)/)[1]
    puts name
    @names << name
  end

  if doc.css('a[rel=next]').any?
    link = doc.css('a[rel=next]').first
    path = link.attributes['href'].to_s
    download_page path
  end
end

('a'..'z').each do |letter|
  puts "Downloading '#{letter}'"
  download_page("/gems?letter=#{letter}&page=1")
end

File.open('gemnames.yaml', 'w') {|f| f.write(YAML.dump(@names)) }
