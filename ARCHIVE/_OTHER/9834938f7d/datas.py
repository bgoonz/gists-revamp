__author__ = "diego.garcia"

import datetime

dt = datetime.datetime.strptime("February 28, 2014, 7:05 AM", "%B %d, %Y, %I:%M %p")
print(dt.strftime("%d/%m/%Y %I:%M %p"))
