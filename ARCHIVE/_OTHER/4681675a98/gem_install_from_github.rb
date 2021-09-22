# should really be using args here
github_url = ENV['GITHUB_URL']
branch = ENV['BRANCH'] || 'master'

# should really use this instead: https://github.com/carlhuda/bundler/blob/master/lib/bundler/source/git/git_proxy.rb
gemname = File.basename(github_url.sub(%r{^(\w+://)?([^/:]+:)?(//\w*/)?(\w*/)*},''),".git")

raise 'Invalid args' if gemname.nil? || github_url.nil?

puts "Installing #{gemname} from #{github_url}##{branch}"

`rm -rf /tmp/#{gemname} && git clone #{github_url} /tmp/#{gemname}`
`cd /tmp/#{gemname} && git checkout #{branch} && gem build #{gemname}.gemspec && gem install #{gemname}` 
