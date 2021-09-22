require 'json'
require 'open-uri'
repo = ENV['REPO']
owner = ENV['OWNER'] || repo.match(/(.+)\//)[1]

url = "https://github.com/#{repo}/graphs/contributors-data"
doc = open(url).read
if doc == ' ' # retry if data not loaded
  sleep 2
  doc = open(url).read
end
json =JSON.parse(doc)

community_adds = 0
community_deletes = 0

owner_adds = 0
owner_deletes = 0

json.each do |person|
  additions = person['weeks'].map{|w| w['a']}.inject(:+)
  deletions = person['weeks'].map{|w| w['d']}.inject(:+)
  if person['author']['login'] == owner
    owner_adds += additions
    owner_deletes += deletions
  else
    community_adds += additions
    community_deletes += deletions
  end
end

puts "Owner contributions"
puts "  #{owner_adds} ++"
puts "  #{owner_deletes} --"
puts "\n"
puts "Community contributions"
puts "  #{community_adds} ++"
puts "  #{community_deletes} --"
