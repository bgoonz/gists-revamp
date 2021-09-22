import sys
import os
import json
import csv
import time
import pickle

import requests

API_KEY = [YOUR API KEY GOES HERE]

class Locu(object):

    def __init__(self):
        pass

    def menu_search(self, menu_item, postal_code):
        params = {'api_key': API_KEY, 'postal_code': postal_code, 'name': menu_item }
        url = "https://api.locu.com/v1_0/menu_item/search/?"
        result = requests.get(url, params=params)

        return json.loads(result.text)


if __name__ == '__main__':
    l = Locu()
    query = "cheeseburger" # add your term here

    r = csv.reader(open('us_top_metro_zipcodes.csv', 'rU'))
    for row in r:
        zipcode = row[1]
        print zipcode
        m = l.menu_search(query, zipcode)
        pickle.dump(m, open('data/' + zipcode + '.pickle','wb'))
        time.sleep(.5)
