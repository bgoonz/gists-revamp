import sys, os
import urllib, urllib2
import json

def main(query, api_key):
    h = urllib.urlopen("http://api.nytimes.com/svc/search/v1/article?%s" % (urllib.urlencode({'api-key': api_key, 'query': query})))
    return json.loads(h.read())

if __name__ == '__main__':
    print main("title:data","f7b4a1749764aec0364b215c354e3a0f:18:25759498")