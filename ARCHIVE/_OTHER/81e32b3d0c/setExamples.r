# Starting Order
> c(1, 2) %in% c(1,3,5) # Indexes left side
[1]  TRUE FALSE
> c(1, 2) == c(1,3,5) # Same as above, but indexes right side
[1]  TRUE FALSE FALSE
> ! c(1, 2) %in% c(1,3,5)
[1] FALSE  TRUE
> union(c(1, 2), c(1,3,5))
[1] 1 2 3 5
> intersect(c(1, 2), c(1,3,5))
[1] 1
> setdiff(c(1, 2), c(1,3,5))
[1] 2
> setequal(c(1, 2), c(1,3,5))
[1] FALSE
> setequal(c(1, 2), c(1,2))
[1] TRUE

# Reversed Order
> c(1,3,5) %in% c(1, 2) # Indexes left side
[1]  TRUE FALSE FALSE
> c(1,3,5) == c(1, 2) # Note: Indexes same left side -- different than first example
[1]  TRUE FALSE FALSE
> ! c(1,3,5) %in% c(1, 2) 
[1] FALSE  TRUE  TRUE
> union(c(1,3,5), c(1, 2))
[1] 1 3 5 2
> intersect(c(1,3,5), c(1, 2))
[1] 1
> setdiff(c(1,3,5), c(1, 2))
[1] 3 5
> setequal(c(1,3,5), c(1, 2))
[1] FALSE
> setequal(c(1,3,5), c(1,3,5))
[1] TRUE