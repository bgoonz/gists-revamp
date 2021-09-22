require 'rubygems'
require 'faraday_stack'
require 'geokit'

r = Geokit::Geocoders::MultiGeocoder.geocode("8.8.8.8")

url = "http://www.google.com/ig/api?weather=#{r.city}"

resp = FaradayStack.get url

img = resp.body.search('forecast_conditions icon').first.values.first

`open http://google.com#{img}`