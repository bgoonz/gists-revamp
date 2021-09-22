## Download
from google.colab import files
df.to_csv('df.csv')
files.download('df.csv')

## Upload
from google.colab import files
df = files.upload()

## Save CSV on remotely in Colab
import pandas as pd
from IPython.display import FileLink, FileLinks
import os

data = df
directory = 'data/'
filename = 'data.csv'
pathtofile = directory + filename

if not os.path.exists(directory):
  os.makedirs(directory)
  
else:
  print('Directory already exists')  
  data.to_csv(pathtofile, index = True)
  
FileLinks(directory)