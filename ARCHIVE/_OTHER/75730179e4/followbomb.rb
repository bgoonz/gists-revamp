require 'octokit'

# usage: $ ACCESS_TOKEN=1234567890abcdef ruby followbomb.rb
# create a token here: https://github.com/settings/tokens/new

client = Octokit::Client.new :access_token => ENV['ACCESS_TOKEN']

puts "Loading members of all orgs"
members = client.orgs.map{|org| client.organization_members(org.login) }.flatten.map(&:login)

puts "Found #{members.length} members (#{members.uniq.length} unique)"
members = members.uniq.sort

members.each do |m|
  puts "Following #{m}"
  client.follow(m)
end