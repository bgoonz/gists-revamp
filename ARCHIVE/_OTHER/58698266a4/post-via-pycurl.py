c = pycurl.Curl()
c.setopt(pycurl.URL, "http://example.com/post")
c.setopt(pycurl.POST, 1)
c.setopt(pycurl.POSTFIELDS,
    urllib.urlencode({
        'some_data': 'the data',
        'some_more_data': 'more data',
    })
)
c.perform()
c.close()
