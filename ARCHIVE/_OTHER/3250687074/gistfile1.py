Python 2.6.1 (r261:67515, Jun 24 2010, 21:47:49) 
[GCC 4.2.1 (Apple Inc. build 5646)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> a = {1:1}
>>> b = {2:2}
>>> dict(a, **b)
{1: 1, 2: 2}
