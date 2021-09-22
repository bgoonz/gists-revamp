### Code to download attached csv and clean leading zeros, if needed
http://time.com/money/collection/best-places-to-live-2017/

```R

library(data.table)
library(RCurl)
dest <- "https://gist.githubusercontent.com/ZeccaLehn/3da83ca94309e88ec0babe7707fc3e04/raw/81f0ee0cea8097cbdaaf980be6d0eda2bb10b3a4/Final_Money_100.csv"
dataRaw <- getURL(dest, ssl.verifypeer=FALSE)
dataRaw <- as.data.table(read.csv(text = dataRaw, sep = ",", stringsAsFactors = F))
head(dataRaw)

  # # Pads leading zeros for state fips
  # dataRaw$stateFips <- sprintf("%02d",dataRaw$stateFips)
  # # Pads leading zeros for county fips
  # dataRaw$countyFips <- sprintf("%03d",dataRaw$countyFips)
  # # Pads leading zeros for place fips
  # dataRaw$placeFips <- sprintf("%05d",dataRaw$placeFips)

```
#### Plot 100 places on US Map
```R
library(ggmap)
map <- get_map(location = 'USA', zoom = 4)
ggmap(map) +
  geom_point(aes(x = longitude, y = latitude), size = 5, 
             data = dataRaw, alpha = .5) 
```