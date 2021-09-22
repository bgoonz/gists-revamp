from urllib.request import urlopen
from bs4 import BeautifulSoup

import pandas as pd
import random
from urllib.parse import urlparse
import urllib.request
import lxml.html

# randLink = str(seedFunds.iloc[int(random.uniform(1, len(seedFunds))), 4])
randLink = "http://ifly.vc/"

allLinks = []
for link in [
    "",
    "/about",
    "/contact",
    "/news",
    "/blog",
    "/contactus",
    "/news",
    "/team",
    "/portfolio",
]:
    try:
        if not urlparse(randLink + link).scheme:
            print("http://" + randLink + link)
            url = urllib.request.urlopen("http://" + randLink + link).read()
        else:
            print(randLink + link)
            url = urllib.request.urlopen(randLink + link).read()

        soup = BeautifulSoup(url)
        allLinks = []

        #         for a in soup.find_all(href=True):
        #             allLinks.append(a.get('href'))

        html = lxml.html.fromstring(url)
        allLinks = html.xpath("//a/@href")

        print(allLinks)
        filteredLinks = None
        allLinks = pd.Series(pd.Series(allLinks).unique())
        filters = allLinks.str.contains(
            "@|twitter.com|linkedin.com|medium.com|facebook.com|producthunt.com|angel.co|instagram.com|youtube.com|itunes",
            regex=True,
        )
        filteredLinks = allLinks[
            filters.index.where(filters == True).dropna().astype(int)
        ]
        filteredLinks = set(filteredLinks.to_list())
        print(filteredLinks)

    except:
        filteredLinks = None
        print("broken")

filteredLinks

#  "javascript:DeCryptX('3l1o3i0o0@2c3v2k0m0o0v3y1f1o2v1v1s1f2u311d2q1n')"}"
