require 'octokit'
require "redis"
require 'date'

redis = Redis.new

# usage: $ ACCESS_TOKEN=1234567890abcdef ruby octochange.rb
# create a token here: https://github.com/settings/tokens/new

Octokit.auto_paginate = true
client = Octokit::Client.new :access_token => ENV['ACCESS_TOKEN']

repos = client.repos

repos.each do |repo|
  yesterday = redis.smembers("#{repo.full_name}-#{Date.today.prev_day}") || []

  today_key = "#{repo.full_name}-#{Date.today}"
  if redis.exists(today_key)
    today = redis.smembers(today_key) || []
  else
    today = client.stargazers(repo.full_name).map(&:login) || []
    redis.sadd(today_key, today) if today.any?
  end

  gained_stars = today - yesterday
  lost_stars = yesterday - today

  if gained_stars.length + lost_stars.length > 0
    puts "#{repo.full_name}:  #{gained_stars.length} gained,  #{lost_stars.length} lost"
  end
end
