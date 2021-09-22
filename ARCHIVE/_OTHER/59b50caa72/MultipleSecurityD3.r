###### Multiple Security Downloader with D3.js Plot ######

library(quantmod)
# require(devtools)
# install_github('rCharts', 'ramnathv')
library(rCharts)

from = "2015-01-01"
to = "2016-01-01"

# Below five lines adapted from from: http://stackoverflow.com/questions/18027098/error-in-try-xtsx-error-must-be-either-xts-coercible-or-timebased/18027354#18027354
e <- new.env()
s <- c("SPY","MSFT","C", "FB")
getSymbols.yahoo(s, env = e, from = from, to = to, period = "W")
l.adj <- eapply(e, quantmod::Ad)[s] # Adjusted Close
l.wk <- lapply(l.adj, function(x) apply.weekly(x, mean))

## Create D3 plot from weekly price data 
fullTable <- round(do.call(cbind, l.wk),2)
dateColumn <- as.Date(as.POSIXct( attributes(fullTable)$index, 
                                  origin = "1970-01-01", tz = "UTC"))
names(fullTable) <- gsub(".Adjusted","",names(fullTable))
fullTable <-  cbind(date = dateColumn, as.data.frame(fullTable))
namesInsert <- paste0("c(", paste0(gsub("\"", "'",shQuote(names(fullTable)[which(names(fullTable) != 'date')])), collapse = ","),")")
fullTable <- transform(fullTable, date = as.character(date))

eval(parse(text = paste0("m1 <- rCharts::mPlot(x = 'date', y = names(fullTable)[which(names(fullTable) != 'date')], type = 'Line', data = fullTable)" ) ))
m1$set(pointSize = 0, lineWidth = 1)
m1

# m1$print("chart2") # Creates an iFrame of prices