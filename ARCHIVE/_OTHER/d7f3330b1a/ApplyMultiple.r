# Data Sampled from Bayesian AB Testing Article: http://varianceexplained.org/r/credible_intervals_baseball/

hit_table <- data.frame(hits = c(0, 0, 4, 9, 28, 30), at_bat = c(3, 6, 10, 41, 130, 139))

propTable <- function(inputData = inputData, correction = TRUE){
    
      prop_return <- apply(inputData, 1, function(x){
      
            prop_row <- prop.test(x[1], x[2], conf.level = 0.95, correct = correction)
            
            return(list(prop_row$conf.int[1], mean(prop_row$conf.int), prop_row$conf.int[2]))
            
            })
    
      cbind(lowConf = lapply(prop_return, "[[", 1), avgConf = lapply(prop_return, "[[", 2), highConf = lapply(prop_return, "[[", 3))

}

confidenceTable <- propTable(hit_table, TRUE)
confidenceTable

#     lowConf   avgConf   highConf 
# [1,] 0         0.3450059 0.6900119
# [2,] 0         0.2415915 0.4831829
# [3,] 0.1369306 0.4316304 0.7263303
# [4,] 0.1111181 0.2457114 0.3803047
# [5,] 0.1501351 0.2239887 0.2978424
# [6,] 0.1524702 0.2238637 0.2952571


