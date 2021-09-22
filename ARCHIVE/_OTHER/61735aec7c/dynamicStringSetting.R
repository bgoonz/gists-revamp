# Static variable setting
eval(parse(text="adder1 <- 1 + 3; adder2 <- 1 + 4"))
adder1 # [1] 4
adder2 # [1] 5

# Dynamic variable setting
for(i in 1:2){
  print(paste0("adder", i, " <- ", i + 1))
  eval(parse(text = paste0("adder", i, " <-", i + 1)))
}
adder1 # [1] "adder1 <- 2"
adder2 # [1] "adder2 <- 3"
