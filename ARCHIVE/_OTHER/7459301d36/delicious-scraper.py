# Requirements:
#    - python-lxml
#    - pyquery
#
# As implemented in http://mybucket.co

# html_util.py
from pyquery import PyQuery as pq
def extract_delicious_data_from_html(html):
    results = []
    d = pq(html)
    items = d("li.post")

    for index, item in enumerate(items):
        result = {}

        bookmarked_ymd = d(item).find("div.dateGroup")
        if len(bookmarked_ymd) > 0:
            bookmarked_ymd = bookmarked_ymd[0]
            result['bookmarked_ymd'] = bookmarked_ymd.get('title', None)

        else:
            result['bookmarked_ymd'] = results[index -1]['bookmarked_ymd']

        href = d(item).find("a.taggedlink")
        if len(href) > 0:
            href = href[0]
            result['href'] = href.get('href', None)
            result['title'] = d(href).text()

        tags = d(item).find("ul.tag-chain li a")
        if len(tags) > 0:
            result['tags'] = []
            for tag in tags:
                result['tags'].append(d(tag).text())

        results.append(result)

    return results


# scraper.py
import html_util
def scrape_single_user(self, delicious_username, page=1):
    if delicious_username:
        url = "http://delicious.com/%s?page=%s&setcount=100" % (delicious_username, page)

        try:
            response = urllib2.urlopen(url)

            results = html_util.extract_delicious_data_from_html(response.read())
            if len(results) > 0:
                for result in results:
                    pass    # Save link to database

                self.scrape_single_user(delicious_user, page=page+1)

            # When there is no more results... do nothing.
            else:
                pass

        except HTTPError, e:
            pass

        except URLError, e:
            pass
