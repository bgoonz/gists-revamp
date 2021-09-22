##   Code I presented in Johns Hopkins Data Science Capstone: 
###  Size of compressed file as percentage of the original file

                       Adaptive 
                       Huffman Lempel-Ziv
         LaTeX file     66%      44%
         Speech file     65%     64%
         Image file      94%     88%

    http://www.data-compression.com/lossless.html


```R
listOfPackages <- as.vector(installed.packages()[,"Package"])
object.size(listOfPackages) # 12288 bytes
```

### Compressed to: 1,873 bytes
```R
saveRDS(listOfPackages, file = "test.rds", compress = TRUE)

x <- readRDS("test.rds", refhook = NULL)
object.size(x) #12288 bytes
```

### Adapted from: https://stat.ethz.ch/R-manual/R-devel/library/base/html/memCompress.html
```R
txt.gz <- memCompress(x, "g")
object.size(txt.gz) #1448 bytes
txt1 <- strsplit(memDecompress(txt.gz, "g", asChar = TRUE), "\n")[[1]]
object.size(txt1) #12288 bytes

txt.bz2 <- memCompress(x, "b")
object.size(txt.bz2) # 1576 bytes
txt2 <- strsplit(memDecompress(txt.bz2, asChar = TRUE), "\n")[[1]]
object.size(txt2) #12288 bytes
```

### "xz compression is only worthwhile for large objects"
```R
txt.xz <- memCompress(x, "x")
object.size(txt.xz) # 1560 bytes
txt3 <- strsplit(memDecompress(txt.xz, asChar = TRUE), "\n")[[1]]
object.size(txt3) #12288 bytes
```

### Shows that xz prediction is less effective for prediction set
```R
ngram4a <- paste(x[1],"",x[2],"",x[3],"",x[4]) #"abind  ade4  ADGofTest  animation"
object.size(ngram4a) #104 bytes
txt4a.xz <- memCompress(ngram4a, "x")
object.size(txt4a.xz) #152 bytes 
txt4a <- strsplit(memDecompress(txt4a.xz, asChar = TRUE), "\n")[[1]]
txt4a #Reverses compressed code back to original string
```

#### 18 bytes per 1gram versus 26 bytes per
##### 69% of original
```R
ngram4b <- paste(x[1],"",x[2],"",x[3],"",x[4]) #"abind  ade4  ADGofTest  animation"
object.size(ngram4b) #104
txt4b.gz <- memCompress(ngram4b, "g")
object.size(txt4b.gz) #72 bytes 
txt4b <- strsplit(memDecompress(txt4b.gz, "g", asChar = TRUE), "\n")[[1]]
txt4b #Reverses compressed code back to original string
```