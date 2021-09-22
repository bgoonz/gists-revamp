## Finding unique libraries from complete Johns Hopkins Data Science Specialization

```R
library(knitr)
```

See: Data Science Certificate repo
https://github.com/DataScienceSpecialization/courses

## Set to your own working directory where .Rmd forked GitHub files reside

```R
path <- setwd("~/R/Data_Science_Johns Hop/datasciencecoursera/courses")
#path = getwd()
myFiles <- list.files(path = path, include.dirs = TRUE, recursive = TRUE)
myFiles <- unique(myFiles)

index <- grep(".Rmd", myFiles)
RmdFiles <- myFiles[index]

package <- as.list(seq(0,length(RmdFiles)))
#Recursively searches through subdirectories
#for .Rmd file contents and returns library names.

for(i in 1:length(RmdFiles)) {

        RmdPath <- paste(path,"/",RmdFiles[i], sep ="")
        words <- scan(RmdPath, what="character", sep=NULL)
        wordsIndex <- grep("library(*)", words)
        package[[i]] <- words[wordsIndex]

}

packageFinal <- gsub(".*\\((.*)\\).*", "\\1", unique(unlist(package)))
```

### Unique Sort -- subject to change as repository is changed

```R
sort(unique(packageFinal[c(1:3,5:6,8:15,17:23,25:27,30:33,35:43,45:52,55:63,58:70,73,74)]))
```

```R
[1] "binom"         "BMA"           "boot"          "bootstrap"     "car"           "caret"         "datasets"      "data.table"
 [9] "devtools"      "ElemStatLearn" "faithful"      "ggplot2"       "googleVis)"    "hexbin"        "Hmisc"         "httr"
[17] "impute"        "ISLR"          "jsonlite"      "kernlab"       "knitr"         "lattice"       "leaps"         "library)"
[25] "lubridate"     "manipulate"    "maps"          "MASS"          "methods"       "pander"        "plyr"          "quantmod"
[33] "rattle"        "RColorBrewer"  "reshape2"      "rgl"           "rhdf5"         "rjson"         "rMaps"         "rmarkdown"
[41] "sandwich"      "shiny"         "slidify"       "spam"          "splines"       "stringr"       "tsModel)"      "UsingR"
[49] "xlsx"          "XML"           "yaml"
```
