```r
binomProbs <- function(w, n, propStep){

  # print(w)
  # print(n)
  # print(propStep)
  
  plot(seq(0, 1, propStep), dbinom(w, n, prob = seq(0,1, propStep)), xlim = c(0, 1),
       xlab = "", ylab = "")
  points(seq(0, 1, propStep), 
         dbinom(w, n, seq( 0, 1, propStep))/
           sum(dbinom( w, n, seq(0, 1, propStep))), col = "red")

  print(paste0("Sum Unadjusted: ", round(sum(dbinom(w, n, seq(0,1,propStep))),2)))
  print(paste0("Sum Adjusted: ", sum(dbinom(w, n, seq(0,1,propStep))/sum(dbinom(w, n, seq(0,1,propStep))))))

}

## Dynamic Ggplot Output:
library(manipulate)
manipulate(
  
  binomProbs(w, n, propStep),
  w = slider(min = 1, max = 500, step = 1, initial = 6),
  n = slider(min = 2, max = 500, step = 1, initial = 9),
  propStep = slider(min = .001, max = .2, step = .001, initial = .01)
  
)
```