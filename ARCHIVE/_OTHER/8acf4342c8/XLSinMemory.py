import pandas as pd

url = "http://www.econ.yale.edu/~shiller/data/ie_data.xls"
data = pd.read_excel(url, "Data")
data
