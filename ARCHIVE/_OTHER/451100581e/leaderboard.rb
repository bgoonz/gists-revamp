## Contribution leaderboard
#
# Get a leaderboard of contributions in your org
#
# usage: $ USERNAME=yourusername PASSWORD=yourpassword ORG=yourorgname ruby leaderboard.rb
#
# n.b requires the octokit and mechanize gems

require 'rubygems'
require 'octokit'
require 'mechanize'

USERNAME = ENV['USERNAME']
PASSWORD = ENV['PASSWORD']
ORG =      ENV['ORG']

client = Octokit::Client.new(:login => USERNAME, :password => PASSWORD, :auto_traversal => true)

users = client.org_members(ORG).map(&:login)

a = Mechanize.new { |agent| agent.user_agent_alias = 'Mac Safari' }

# comment this block out for open source contributions only
a.get('http://github.com/login') do |login_page|
  login_page.form_with(:action => '/session') do |f|
    f.login    = ENV['USERNAME']
    f.password = ENV['PASSWORD']
  end.click_button
end

leaderboard = []

users.each do |u|
  page = a.get("http://github.com/#{u}")
  total = page.search('.contrib-day .num').text.match(/([\d,]+)/)[1].delete(',').to_i
  leaderboard << [u, total]
end

leaderboard.sort_by{|u| u[1] }.reverse.each do |u|
  puts "#{u[0]} - #{u[1]}"
end