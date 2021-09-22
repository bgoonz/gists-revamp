$ brew install rbenv
$ brew install ruby-build
$ echo 'eval "$(rbenv init -)"' >> ~/.bash_profile

$ rbenv install 1.9.3-p327
$ echo "1.9.3-p327" > ~/Sites/PROJECT_NAME/.rbenv-version

$ cd ~/Sites/PROJECT_NAME
$ gem install bundler && rbenv rehash
$ bundle install

$ bundle exec rake db:create:all
$ bundle exec rake db:migrate

$ rails s

# Open http://localhost:3000