# Adapted Arules Association Rules from Binary Table in R
# https://monsiterdex.wordpress.com/2013/11/01/market-basket-analysis-apriori-algorithm-in-r-part-01/
# https://github.com/A01203249/YouTube-Videos/blob/master/R_code_%26_data/titanic.R
# https://www.youtube.com/watch?v=DQGJhZNhG4M
# http://stackoverflow.com/questions/11659128/how-to-use-cast-or-another-function-to-create-a-binary-table-in-r

dat <- read.table(textConnection("
Group Response
A A
A E
A H
A I
A J
A K
A M
A Q
A U
A V
A X
B B
B E
B F
B I
B K
B L
B N
B O
B Q
B R
B V
B Y"), stringsAsFactors = FALSE, skip = 1, header = T)

# To Binary Table
library(reshape2) # Makes Binary Table of Blue Vinyl sample
binaryTab <- reshape2::dcast(dat,Group~Response,fun.aggregate = function(x){as.integer(length(x) > 0)}, value.var = "Response")

library(arules)
binaryTab = apply(binaryTab,2,as.character)
binaryTab = data.frame(binaryTab, stringsAsFactors = TRUE)
tr = as(binaryTab,"transactions")
rules = apriori(tr, parameter=list(supp=0.8, conf=0.8, target="rules"))
rules.sorted <- sort(rules, by="lift")
inspect(rules.sorted[1:20]) # Top 20 by Lift

