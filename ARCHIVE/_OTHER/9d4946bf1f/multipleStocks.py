# Clone and pip install pandas_datareader from Github first

    # pip install fix_yahoo_finance --upgrade --no-cache-dir
    # conda install -c https://conda.anaconda.org/anaconda pandas-datareader

import pandas as pd
pd.core.common.is_list_like = pd.api.types.is_list_like
from pandas.api.types import is_list_like
from pandas_datareader import data as pdr
import fix_yahoo_finance as yf
yf.pdr_override()

#scrape html from website and store 3rd DataFrame as our stock tickers - this is dictated to us by the structure of the html
stock_list = pd.read_html("https://www.marketwatch.com/tools/industry/stocklist.asp?bcind_ind=9535&amp;bcind_period=3mo")[3]
#convert the DataFrame of stocks into a list so we can easily iterate over it
tickers = stock_list[1].dropna()[1:].tolist()

start_date = '2005-01-01'
end_date = '2016-01-01'

exchange = 'yahoo'
column_name = 'Adj Close' # 'Open' 'High' 'Low' 'Close' 'Adj Close' 'Volume'


allData = pd.DataFrame()
finalTickers = []
for ticker in tickers:
    try:
        
        allData = pd.merge(allData, pd.DataFrame(pdr.get_data_yahoo(ticker, fields='price', 
                           start=start_date, end=end_date)['Adj Close']), 
                           right_index=True, left_index=True, how='outer')
       
        # Appends tickers which have data
        finalTickers.append(ticker)
        
    except: 
        next 

allData.columns = finalTickers
allData = allData.dropna(axis='columns')
allData
import pandas as pd
pd.core.common.is_list_like = pd.api.types.is_list_like
from pandas.api.types import is_list_like
from pandas_datareader import data as pdr
import fix_yahoo_finance as yf
yf.pdr_override()

#scrape html from website and store 3rd DataFrame as our stock tickers - this is dictated to us by the structure of the html
stock_list = pd.read_html("https://www.marketwatch.com/tools/industry/stocklist.asp?bcind_ind=9535&amp;bcind_period=3mo")[3]
#convert the DataFrame of stocks into a list so we can easily iterate over it
tickers = stock_list[1].dropna()[1:].tolist()

start_date = '2005-01-01'
end_date = '2016-01-01'

exchange = 'yahoo'
column_name = 'Adj Close' # 'Open' 'High' 'Low' 'Close' 'Adj Close' 'Volume'


allData = pd.DataFrame()
finalTickers = []
for ticker in tickers:
    try:
        
        allData = pd.merge(allData, pd.DataFrame(pdr.get_data_yahoo(ticker, fields='price', 
                           start=start_date, end=end_date)['Adj Close']), 
                           right_index=True, left_index=True, how='outer')
       
        # Appends tickers which have data
        finalTickers.append(ticker)
        
    except: 
        next 

allData.columns = finalTickers
allData = allData.dropna(axis='columns')
allData