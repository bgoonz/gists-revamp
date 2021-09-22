import pandas as pd
from IPython.display import FileLinks #  FileLink
import os

data = pd.DataFrame([['a', 'b'],['c', 'd'],['e','f']], columns = ['foo', 'bar']) # .values.tolist()
directory = 'testdata/'
filename = 'data2.csv'
pathtofile = directory + filename

if not os.path.exists(directory):
  os.makedirs(directory)
  
else:
  print('Directory already exists')  
  data.to_csv(pathtofile, index = False)
  
FileLink(directory)