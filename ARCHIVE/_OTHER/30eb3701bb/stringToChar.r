stringToChar<- function( example ){
  
  example <- as.character(example)
  
  letters <- strsplit(example,"")[[1]] 
  
  for (i in letters[1:length(letters)] ) { print(i) }
  
}
  
## #Uncomment in IDE to run locally. Note URL match.
# library(devtools)
# source_gist("30eb3701bb99bd047c27") 
# stringToChar( "Hello Wooorld!" ) 
  
# [1] "H"
# [1] "e"
# [1] "l"
# [1] "l"
# [1] "o"
# [1] " "
# [1] "W"
# [1] "o"
# [1] "o"
# [1] "o"
# [1] "r"
# [1] "l"
# [1] "d"
# [1] "!"
  
