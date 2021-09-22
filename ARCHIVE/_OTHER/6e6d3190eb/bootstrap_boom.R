library(dplyr)
library(broom)
library(ggplot2)


dat <- data.frame(x = runif(50000)) %>% tbl_df()

res <- dat %>% bootstrap(100) %>% do(tidy(lm(x ~ 1, .)))

ggplot(res, aes(x = estimate)) + geom_histogram()
