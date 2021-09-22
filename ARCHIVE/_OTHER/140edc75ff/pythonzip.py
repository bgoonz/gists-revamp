import requests, zipfile, io

url = 'https://www.huduser.gov/portal/datasets/hads/hads2013n_ASCII.zip'
filename = 'thads2013n.txt'

r = requests.get(url)
z = zipfile.ZipFile(io.BytesIO(r.content))
z.extractall()

import pandas as pd
df = pd.read_csv(filename, sep=',')
df