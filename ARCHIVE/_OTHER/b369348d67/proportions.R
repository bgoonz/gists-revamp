## prop.test gives pooled 2-sample proportion result
## glm w/ binomial family gives unpooled 2-sample proportion result
## lm and glm w/ gaussian family give unknown result

library(dplyr)
library(broom)
set.seed(12345)

## set up dataframe -------------------------
n_A <- 5000
n_B <- 5000

outcome <- rbinom(
  n = n_A + n_B,
  size = 1,
  prob = 0.5
)
treatment <- c(
  rep("A", n_A),
  rep("B", n_B)
)

df <- tbl_df(data.frame(outcome = outcome, treatment = treatment))


## by hand, 2-sample prop tests ---------------------------------------------
p_A <- sum(df$outcome[df$treatment == "A"])/n_A
p_B <- sum(df$outcome[df$treatment == "B"])/n_B

p_pooled <- sum(df$outcome)/(n_A + n_B)
z_pooled <- (p_B - p_A) / sqrt( p_pooled * (1 - p_pooled) * (1/n_A + 1/n_B) )
pvalue_pooled <- 2*(1-pnorm(abs(z_pooled)))

z_unpooled <- (p_B - p_A) / sqrt( (p_A * (1 - p_A))/n_A + (p_B * (1 - p_B))/n_B )
pvalue_unpooled <- 2*(1-pnorm(abs(z_unpooled)))


## using prop.test --------------------------------------
res_prop_test <- tidy(prop.test(
  x = c(sum(df$outcome[df$treatment == "A"]), 
        sum(df$outcome[df$treatment == "B"])),
  n = c(n_A, n_B),
  correct = FALSE
))
res_prop_test # same as pvalue_pooled
all.equal(res_prop_test$p.value, pvalue_pooled)
# [1] TRUE


# using glm with identity link -----------------------------------
res_glm_binomial <- df %>%
  do(tidy(glm(outcome ~ treatment, family = binomial(link = "identity")))) %>%
  filter(term == "treatmentB")
res_glm_binomial # same as p_unpooled
all.equal(res_glm_binomial$p.value, pvalue_unpooled)
# [1] TRUE


## glm and lm gaussian --------------------------------

res_glm <- df %>%
  do(tidy(glm(outcome ~ treatment))) %>%
  filter(term == "treatmentB")
res_glm 
all.equal(res_glm$p.value, pvalue_unpooled)
all.equal(res_glm$p.value, pvalue_pooled)

res_lm <- df %>%
  do(tidy(lm(outcome ~ treatment))) %>% 
  filter(term == "treatmentB")
res_lm
all.equal(res_lm$p.value, pvalue_unpooled)
all.equal(res_lm$p.value, pvalue_pooled)

all.equal(res_lm$p.value, res_glm$p.value)
# [1] TRUE