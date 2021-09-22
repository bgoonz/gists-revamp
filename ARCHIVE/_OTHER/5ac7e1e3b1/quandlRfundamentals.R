# SF0/MSFT_EQUITY_MRY  # Equity
# SF0/MSFT_PB_MRY  # Price / Book Value
# SF0/MSFT_SHARESWADIL_MRY # Wavg shares diluted
# SF0/MSFT_SHARESWADIL_MRY # Tangible per share

library(Quandl)

Quandl.api_key("YOURQUANDLKEY") 

Ticker <- "FB"

.dataTBVPS <- Quandl( paste0("SF0/",Ticker,"_TBVPS_MRY") )
.dataEquity <- Quandl( paste0("SF0/",Ticker,"_EQUITY_MRY") )
.dataPB <- Quandl( paste0("SF0/",Ticker,"_PB_MRY") )
.dataDilutedOutst <- Quandl( paste0("SF0/",Ticker,"_SHARESWADIL_MRY") )

hiddenObj <- ls(all=TRUE)[ls(all=TRUE) %in% ls(all=FALSE) == FALSE] # Shows Hidden Objects

# Lengths of each object
objLengths <- NULL
for(i in 1:length(hiddenObj)){
    objLengths <- rbind(objLengths, nrow( get(hiddenObj[i]) ))
}

  dataTBVPS <- .dataTBVPS[1:min(objLengths),] ; rm(.dataTBVPS)
  dataEquity <- .dataEquity[1:min(objLengths),] ; rm(.dataEquity)
  dataPB <- .dataPB[1:min(objLengths),] ; rm(.dataPB)
  dataDilutedOutst <- .dataDilutedOutst[1:min(objLengths),] ; rm(.dataDilutedOutst)

  
priceEst <- data.frame(Date = dataTBVPS$Date, Value = (dataEquity$Value/dataDilutedOutst$Value) * dataPB$Value) 
PTBVPS <- data.frame(Date = priceEst$Date, PTBVPS = priceEst$Value / dataTBVPS$Value)
BVPS <- data.frame(Date = dataEquity$Date, Value = dataEquity$Value / dataDilutedOutst$Value)


      par(mfrow=c(4, 1))
      par(mar=c(3,4,4,5)+.1)
      plot(priceEst, type = "b", xlab = "", ylab = "Price", main = "Price  & P / Tangible-Book")
      par(new=TRUE)
      plot(PTBVPS, type = "b", col = "red",xaxt="n",yaxt="n",xlab="",ylab="")
      axis(4)
      mtext("Price / Tangible-Book",side=4,line=3, col = "red", cex = .7)
      
      par(mar=c(3,4,4,5)+.1)
      plot(priceEst, type = "b", xlab = "", ylab = "Price", main = "Price  & Tangible-Book", ylim = c(0,max(priceEst$Value)))
      par(new=TRUE)
      plot(dataTBVPS, type = "b", col = "red",xaxt="n",yaxt="n",xlab="",ylab="", ylim = c(0,max(priceEst$Value)))
      axis(4)
      mtext("Tangible Book per Share",side=4,line=3, col = "red", cex = .7)
      
      par(mar=c(3,4,4,5)+.1)
      plot(priceEst, type = "b", xlab = "", ylab = "Price", main = "Price  & P / Book-Value", ylim = c(0,max(priceEst$Value)))
      par(new=TRUE)
      plot(dataPB$Value, type = "b", col = "blue",xaxt="n",yaxt="n",xlab="",ylab="", ylim = c(0,max(priceEst$Value)))
      axis(4)
      mtext("P / B",side=4,line=3, col = "blue", cex = .7)
      
      par(mar=c(3,4,4,5)+.1)
      plot(priceEst, type = "b", xlab = "", ylab = "Price", main = "Price  & Book Value per Share")
      par(new=TRUE)
      plot(BVPS$Value, type = "b", col = "blue",xaxt="n",yaxt="n",xlab="",ylab="")
      axis(4)
      mtext("Book Value per Share",side=4,line=3, col = "blue", cex = .7)
      



