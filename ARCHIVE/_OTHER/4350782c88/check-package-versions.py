#!/usr/bin/env python

from __future__ import with_statement
import os, os.path, sys
import simplejson as json
import urllib2
from distutils.version import StrictVersion

def pad_spaces(str_, length=18):
    return str_ + ' ' * (length - len(str_))


def print_format(title, package, from_pypi_version, version):
    print pad_spaces(title, 14) + pad_spaces(package) + pad_spaces("(PyPI) %s" % from_pypi_version) + pad_spaces("(ours) %s" % version)


def scrape(package):
    request  = urllib2.Request('http://pypi.python.org/pypi/%s/json' % package)
    response = urllib2.urlopen(request)
    payload  = response.read()
    return json.loads(payload)


def scrape_pypi(filename):
    with open(filename, 'r') as f:
        for line in (l for l in f.readlines() if l.find('==') > -1):
            chunks           = line.split()
            package, version = chunks[-1].split('==')
            from_pypi        = scrape(package)
            from_pypi_version= from_pypi['info']['version']

            if StrictVersion(from_pypi_version) > StrictVersion(version):
                print_format("NEW VERSION", package, from_pypi_version, version)
            else:
                print_format("no changes", package, from_pypi_version, version)


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print "USAGE: %s requirements.txt" % __file__
        exit(1)

    filename = sys.argv[-1]
    scrape_pypi(filename)
