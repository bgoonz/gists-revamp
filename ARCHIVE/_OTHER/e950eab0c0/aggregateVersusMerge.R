###### MTCARS Merging and Aggregation Example ######

### Prepare data and load library
library(data.table)
mtcarsDt <- as.data.table(mtcars); mtcarsDt
mtcarsDt <- cbind(carBrand = rownames(mtcars), mtcarsDt); mtcarsDt

    ## Use list to aggregate
    aggregateMtCars <- mtcarsDt[, list(nAgg = .N, meanHPagg = mean(hp)), by = c("gear", "am")]
    aggregateMtCars
    
        # Use multiple lines without merge to prove above aggregation
        mtcarsDt[, n := .N, by=c("gear", "am")]
        mtcarsDt[, meanHP := mean(hp), by=c("gear", "am")]
        mtcarsDt

#### To prove list method above
mtcarsDt <- merge(mtcarsDt, aggregateMtCars, by = c("gear","am")); mtcarsDt
