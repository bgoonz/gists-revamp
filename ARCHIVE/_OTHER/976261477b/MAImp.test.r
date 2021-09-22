# Loads current gist with function
# https://gist.github.com/timelyportfolio/1405187
# dev.off(); plot(1)

library(devtools)
source_gist("1405187")

require(quantmod)
require(PerformanceAnalytics)

ticker < - "^SPY" # ^GSPC

getSymbols(ticker, from = "1896-01-01", to = Sys.Date())

#test 20 day simple crossover 50 day simple
signals <- MAImp(get(ticker), k1=20, k2=50)
#another example would be a simple 100 day moving average price cross
# signals <- MAImp(get(ticker), k1=100)

#use lag 1 to eliminate foresight
#signal is 1 (in) and 0 (out)
head(get(ticker)[,4])
ret <- merge(base::rep(ROC(get(ticker)[,6],type="discrete", n = 1),3) * lag(signals, k = 1), ROC(get(ticker)[,6],type="discrete",n=1))
colnames(ret) <- c(colnames(signals),"BuyHold")

trailing = 500
plot(TTR::momentum(get(ticker)[,6], n = trailing), main = paste0(ticker, " Momentum ",  " Trailing ", trailing, " Days"))


#jpeg(filename="performance summary.jpg",
# quality=100,width=6.25, height = 8, units="in",res=96)
charts.PerformanceSummary(ret,ylog=TRUE,
                          main = "Test of Improved Moving Average",
                          colorset=c("cadetblue","darkolivegreen3","gray70","bisque3"))
#dev.off()
table.AnnualizedReturns(ret)

require(ggplot2)
library(reshape2) # For melt()
#ggplot downside statistics
downside <- as.data.frame(table.DownsideRisk(ret))
#get rid of drawdown since it messes up the chart
#and is already shown on Performance Summary
downside <- downside[c(1:6,8:11),]
downsideMelt<-melt(cbind(rownames(downside),downside),id.vars=1)
colnames(downsideMelt)<-c("Statistic","System","Value")
#jpeg(filename="ggplot downside.jpg",
# quality=100,width=6.25, height = 8, units="in",res=96)
ggplot(downsideMelt, aes(x=Statistic,y=Value,fill=System)) +
  geom_bar(position="dodge", stat="identity") +
  coord_flip() +
  scale_fill_manual(values=c("cadetblue","darkolivegreen3","gray70","bisque3","purple")) +
  theme_bw()
#dev.off()

#ggplot CAPM statistics
capm <- as.data.frame(table.CAPM(ret[,1:3],ret[,4]))
capmTable<-melt(cbind(rownames(capm),capm),id.vars=1)
colnames(capmTable)<-c("Statistic","System","Return")
#jpeg(filename="ggplot capm.jpg",
# quality=100,width=6.25, height = 8, units="in",res=96)
ggplot(capmTable, aes(x = Statistic, y=Return, fill=System)) +
  geom_bar(position="dodge", stat="identity") +
  coord_flip() +
  scale_fill_manual(values=c("cadetblue","darkolivegreen3","gray70","bisque3","purple")) +
  theme_bw()
#dev.off()


#test 10 month Mebane Faber style moving average for another example
TICKER.monthly <- to.monthly(get(ticker))[,4]
#convert date index to yyyy-mm-dd
index(TICKER.monthly) <- as.Date(index(TICKER.monthly))
signals.monthly <- MAImp(TICKER.monthly, k1=10)

#use lag 1 to eliminate foresight
#signal is 1 (in) and 0 (out)
ret.monthly <- merge(rep(ROC(TICKER.monthly,type="discrete",n=1),3) * lag(signals.monthly,k=1),ROC(TICKER.monthly,type="discrete",n=1))
colnames(ret.monthly) <- c(colnames(signals.monthly),"BuyHold")
#jpeg(filename="performance monthly.jpg",
# quality=100,width=6.25, height = 8, units="in",res=96)
charts.PerformanceSummary(ret.monthly,ylog=TRUE,
                          main = paste0("Test of Improved Moving Average on Monthly (", ticker, ")"),
                          colorset=c("cadetblue","darkolivegreen3","gray70","bisque3"))
#dev.off() 


###################

# Source: https://gist.github.com/timelyportfolio/1405187

# # Function to implement a version of the improved moving average functionality
# # introduced and tested in:
# #
# # Papailias, Fotis and Thomakos, Dimitrios D.,
# # "An Improved Moving Average Technical Trading Rule,
# # (September 11, 2011). Available at SSRN: http://ssrn.com/abstract=1926376
# #
# # Original code written by Kent Russell @ timelyportfolio.com
# #
# # Cross-checked by Dimitrios Thomakos on 11/29/2011, @ quantf.com
# # Cross-checked by Fotis Papailias on 11/30/2011, @quantf.com
# #
# # NOTE: this function does not perform the exact methodology
# # of the paper and results in more trades. Is given for
# # public use for research and back-testing purposes with
# # no guarrantees whatsoever!!!
# #
# # Comment by Fotis Papailias: More care must be taken regarding
# # the entry prices.
# #
# # All rights reserved & copyright by the above authors.
# #
# 
# # Main function with additional comments & minor changes
# #
# # The research uses daily data, but the function can be used
# # for any periodicity
# 
# MAImp <- function (x, k1=20, k2=0)
# {
#   # Cross-checks
#   if ((k1 < 0) | (k2 < 0) | ((k1 > k2) & (k2 > 0))) { stop("k1,k2 must be positive and k1 < k2") }
#   # Select correctly the closing price if OHLC is loaded
#   if(NCOL(x) > 1) x <- x[,4]
#   
#   # Get shorter moving average; will use this as the only
#   # moving average if not crossover and will assume no
#   # crossover if k2 is not defined
#   #
#   MAshort <- runMean(x,n=k1)
#   if( k2!=0 ) { MAlong <- runMean(x,n=k2) }
#   else if (k2 == 0)
#   {
#     # Swap MAshort for MAlong and assign MAshort as x series
#     # Do this so we can use the same function later for the
#     # evaluation of trading signals
#     MAlong <- MAshort
#     MAshort <- x
#   }
#   # Get the standard MA signals
#   signal.ma <- ifelse(MAshort > MAlong, 1, 0)
#   # Get the entry values for the trailing stop defined in the paper;
#   # note the difference with the above...
#   x.entry <- ifelse((MAshort > MAlong) & (lag(MAshort,k=1) < lag(MAlong,k=1)), 1, 0) * x
#   
#   # This little block will fill in the entry x
#   #
#   #I have still have not found a better way to accomplish
#   #takes longer than I would like
#   # Select the values of modified cross-over signals only
#   entry <- x.entry[which(x.entry!=0)]
#   # Loop over these values to compute the trailing stop-based signals
#   for (i in 1:NROW(entry))
#   {
#     ifelse (i < NROW(entry),
#             x.entry[paste(index(entry)[i],index(entry)[i+1],sep="::"),] <- entry[i],
#             x.entry[paste(index(entry)[i],sep="::"),] <- entry[i])
#   }
#   # Compute and return the modified signal as well as the standard signal
#   signal.mod <- ifelse(x >= x.entry, 1, 0) # Fotis: Strange things here....
#   #the "strange things" are without changes later in this function
#   #is this signal will reenter whenver closing price crosses
#   #back above the entry price
#   #after converstation with the authors
#   #I realized that the system should not reenter until
#   #the standard ma or ma crossover exits and enters as a different signal
#   
#   ###changed here to insure that crossover still intact
#   ###to try a different version
#   ###remove comment on next line if you would like to experiment
#   ###I prefer the results from this next signal
#   #signal.mod <- ifelse(x >= x.entry & signal.ma==1 , 1, 0)
#   
#   #add additional logic to insure consistency with research paper
#   #if exit on improved signal there is no reentry until
#   #a new crossover
#   simple.entry <- ifelse((MAshort > MAlong) & (lag(MAshort,k=1) < lag(MAlong,k=1)), 1, 0)
#   improved.exit <- ifelse(signal.mod==0 & lag(signal.mod,k=1)==1,-1,0)
#   
#   simple.date <- simple.entry[which(simple.entry!=0)]
#   improved.date <- improved.exit[which(improved.exit!=0)]
#   
#   #initialize this adjusted as signal.mod (varition of implementation)
#   #signal.mod.adj will be the the paper's implementation
#   signal.mod.adj <- signal.mod
#   j=1
#   for (i in 1:NROW(improved.date)) {
#     #need two counters i and j for this to work
#     #since the standard ma (simple.date) and the improved(improved.date)
#     #are not aligned
#     while (index(improved.date)[i]>index(simple.date)[j])
#       if(j+1 < NROW(simple.date))
#         j=j+1
#     else break #exit while loop if we are at the end
#     #print(paste(i,j))
#     
#     #turn off all reenter 1s since reentry on the improved
#     #should only occur when the standard crosses below/exits and
#     #standard crosses above/enters
#     
#     signal.mod.adj[paste(index(improved.date)[i],index(simple.date)[j],sep="::"),1]=0
#     #fill 1 for the first day of simple.date to align signals
#     #if we do not do this then improved will always lag by 1
#     #which might amount to foresight on choppy entries
#     signal.mod.adj[index(simple.date)[j],1]=1
#   }
#   #since the signal.mod is now my own
#   #I will introduce the change I mentioned above
#   #to reenter on the improved only when standard simple is still intact
#   signal.mod <- ifelse(x >= x.entry & signal.ma==1 , 1, 0)
#   signals <- merge(standard=signal.ma,modified=signal.mod,modified.correct=signal.mod.adj)
#   colnames(signals) <- c("Simple","Improved-variation","Improved-original")
#   #I think returning xts makes it easier to calculate returns
#   #the return will be three signals
#   #first column will be standard simple moving average or ma crossover
#   #second column will be my unintentional variation of the signal
#   #third column will be the signal introduced and tested by the paper
#   return(signals)
# }
# 
# ##here is a sample of use of the function
# #require(quantmod)
# #require(PerformanceAnalytics)
# #
# #getSymbols("^GSPC", from="1896-01-01", to=Sys.Date())
# ##use 200-day moving average cross
# #signals <- MAImp (x=GSPC, k1=200)
# #ret <- merge(rep(ROC(GSPC[,4],type="discrete",n=1),3) * lag(signals,k=1),ROC(GSPC[,4],type="discrete",n=1))
# #colnames(ret) <- c(colnames(signals),"BuyHold")
# #charts.PerformanceSummary(ret,ylog=TRUE) 
