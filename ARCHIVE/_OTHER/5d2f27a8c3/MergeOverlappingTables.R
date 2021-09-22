library(data.table)

DM = data.table(X = 1:5 , B = c("a", letters[6:7], NA, NA), D = c("g", 
				letters[22:25]), Y = c("j", letters[6:9])  )
keycols = names(DM)
setkeyv(DM, keycols)

DT = data.table(X = 1:5, B = c("a", letters[6:9]),
			 D = c("g", letters[2:5]), Y = c("j", letters[16:19]))

keycols = names(DT)
setkeyv(DT, keycols) 

merge(DM, DT, all = T, allow.cartesian=TRUE)

# Note: Expands row-wise instead of duplicating column-wise--names left unchanged

#   X  B D Y
# 1: 1  a g j # Only one where duplicates exist!
# 2: 2  f b p
# 3: 2  f v f
# 4: 3  g c q
# 5: 3  g w g
# 6: 4 NA x h
# 7: 4  h d r
# 8: 5 NA y i
# 9: 5  i e s