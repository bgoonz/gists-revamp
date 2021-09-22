# Allows for install check and automatic download
# Note: Rerun line 6 after CTRL + ALT + F10 Restart 
# Adapted from: http://stackoverflow.com/questions/4090169/elegant-way-to-check-for-missing-packages-and-install-them
packages <- c("data.table", "dplyr", "doParallel")
packagesCheck <- packages[!(packages %in% installed.packages()[,"Package"])]
if(length(packagesCheck)>0) {install.packages(packagesCheck)}; rm(packagesCheck)
lapply(packages, function(x) {do.call("require", list(x))})