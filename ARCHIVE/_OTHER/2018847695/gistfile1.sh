cd /tmp

# fix pip
curl -O https://raw.github.com/pypa/pip/master/contrib/get-pip.py
sudo python /tmp/get-pip.py

# Fix setuptools
# Download the appropriate .egg from here: http://pypi.python.org/pypi/setuptools
curl -O http://pypi.python.org/packages/2.7/s/setuptools/setuptools-0.6c11-py2.7.egg#md5=fe1f997bc722265116870bc7919059ea
sudo python /tmp/setuptools-0.6c11-py2.7.egg

# Fix distribute
curl -O http://python-distribute.org/distribute_setup.py
sudo python distribute_setup.py