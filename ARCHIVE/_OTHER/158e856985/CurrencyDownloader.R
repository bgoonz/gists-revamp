# Modified from RevolutionR 
# http://blog.revolutionanalytics.com/2013/06/a-mini-tutorial-for-quandl.html

##### API Key #####
token <- 'Your Private API'			# Sign up with Quandl to get a token

#-----------------------------------------------------
library(Quandl)					# Quandl package
library(ggplot2)				# Package for plotting
library(reshape2)				# Package for reshaping data

Quandl.auth(token)				# Authenticate your token
# Build vector of currencies
currencies <- c("CHF", "CAD","EUR","GBP")


# Function to fetch major currency rates
rdQcurr <- function(currencies){
  # Construct Quandl code for first currency
  codes <- paste("CURRFX/",currencies,"USD",sep="")
  for(i in 1:length(currencies)){
    if (i == 1){
      # Select the date from the first currency
      d <- Quandl(codes[1],start_date="2003-01-01",end_date="2015-06-07" )[,1]
      A <- array(0,dim=c(length(d),length(codes)))
      # Get the rate fom the first curency
      A[,1] <- Quandl(codes[1],start_date="2003-01-01",end_date="2015-06-07" )[,2]
    }
    else{
      # Just get the rates for the remaining currencies
      A[,i] <- Quandl(codes[i],start_date="2003-01-01",end_date="2015-06-07" )[,2]
    }
  }
  df <- data.frame(d,A)
  names(df) <- c("DATE", currencies)
  return(df)
}
#

rates <- rdQcurr(currencies)			# Fetch the currency rates
rates$DATE <- as.Date(rates$DATE)		# Make DATE into type Date
#
rates4 <- rates[,c(1,1:length(currencies)+1)]			# Pick out some rates to plot
meltdf <- melt(rates4, id="DATE")		# Shape data for plottting
#
ggplot(meltdf,aes(x=DATE,y=value,colour=variable,group=variable)) + 
  geom_line() +
  scale_colour_manual(values=1:22)+
  ggtitle("Major Currency Exchange Rates in USD") 

