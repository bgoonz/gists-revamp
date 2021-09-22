git clone https://github.com/andrew/repo
cd repo
git co -b rails-upgrade
mate .
bundle

bundle exec rake db:create db:migrate
bundle exec rake

bundle update rails

bundle exec rake

git add Gemfile*
git commit -m 'Updated Rails to 3.2.11'
git push