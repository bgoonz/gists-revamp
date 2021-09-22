## Rails Upgrade check
#
# Check your github repos for out of date rails apps
#
# usage: $ USERNAME=yourusername PASSWORD=yourpassword ruby railscheck.rb
# or
# usage: $ USERNAME=yourusername PASSWORD=yourpassword ORG=yourorgname ruby railscheck.rb
#
# n.b requires the octokit gem

require 'rubygems'
require 'octokit'

USERNAME = ENV['USERNAME']
PASSWORD = ENV['PASSWORD']
ORG =      ENV['ORG']
REGEX = / rails \((\d.+)\)/

client = Octokit::Client.new(:login => USERNAME, :password => PASSWORD, :auto_traversal => true)

if !ORG.nil?
  repos = client.org_repos(ORG)
else
  repos = client.repos
end

need_updating = []
up_to_date = []
repos.each do |repo|
  puts ''
  puts repo.full_name
  begin
    gemlock = client.contents(repo.full_name, :path => 'Gemfile.lock')

    gemlock_content = Base64.decode64(gemlock.content)

    match = gemlock_content.match(REGEX)

    if match
      puts "  #{match[1]}"
      update = ["3.2.13", "3.1.12", "2.3.18"].include?(match[1])
      if update
        up_to_date << [repo.full_name, match[1]]
      else
        need_updating << [repo.full_name, match[1]]
      end
    else
      puts "  Doesn't look like rails"
    end
  rescue
    puts "  No Gemfile.lock"
  end
end

unless need_updating.length.zero?
  puts ''
  puts '*'*20
  puts ''
  puts "Repos that need updating:"
  puts ''
  need_updating.each do |r|
    puts "  #{r[0]} - #{r[1]}"
  end
  puts ''
end