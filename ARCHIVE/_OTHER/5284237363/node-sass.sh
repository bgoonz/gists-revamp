sudo apt-get update
sudo apt-get install git python-software-properties python g++ make
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install nodejs
git clone git@github.com:andrew/node-sass.git
cd node-sass/
npm install

git submodule init
git submodule update
node-gyp rebuild
npm test
cp build/Release/binding.node precompiled/linux-x64/binding.node 
git config --global user.name "Andrew Nesbitt"
git config --global user.email andrewnez@gmail.com
git status
git commit -am 'updated 64bit linux binary'
git push


sudo apt-get install curl
curl https://raw.github.com/creationix/nvm/master/install.sh | sh

# sudo npm install -g node-gyp