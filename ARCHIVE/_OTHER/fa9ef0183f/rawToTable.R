dat <- read.table(textConnection("

date rtn
01/03/2012 0.25%
01/04/2012 0.01%
 01/05/2012 0.02%
 01/06/2012 -0.06%
 01/09/2012 0.11%
 01/10/2012 -0.01%
 01/11/2012 0.00%
 01/12/2012 -0.01%
 
 "), stringsAsFactors = FALSE, skip = 1, header = T
)

str(dat)
class(dat)
dat[,2] <- as.numeric(gsub("%","",dat[2]))
head(dat)
as.data.frame(cbind(dat[1],x))
head(dat)