# -*- coding: utf-8 -*-
"""CS46 Python I.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/gist/bgoonz/e1455a967850983a3d603463885a8026/cs46-python-i.ipynb

# Intro To Python I

## Purpose

**Why do students need to learn this material?**

- Getting familiar with the basics of Python as quickly as possible is necessary because it is the language we will be using throughout the rest of our time together in Computer Science.

**What will you be able to do after learning this material?**

- After achieving the objectives for today, you will be able to write basic Python programs.

**How will you show they have learned the material?**

- You will show you have learned the material by completing all of the code challenges in Python in the module project.


## Let's Review Some of your Objectives

**Name and describe the details of each step of Lambda's Problem-Solving Framework (U.P.E.R.)**
- **U**nderstand
- **P**lan
- **E**xecute
- **R**eflect

**Effectively ask for help by giving the expected vs. experienced behavior, explaining what specific actions you have taken so far, and providing all relevant information and code**
- Ask Good Questions [Article To Read](https://betterprogramming.pub/4-ways-to-ask-better-questions-as-a-software-engineer-a342ffc251a1)


**Use a print statement**
- this may seem trivial but it is one of the fundimentals to getting feedback from your program.
- Use print to return data back to the console when not in a repl.
- use print for the dir command in python
- use print to get a better understanding of a data structure you are working with

**Use white space to denote blocks**
- Python uses white space to denote blocks of code
- This is used when doing any block
- Make sure that your indentation is uniform
- indentation is used for things such as:
  - Conditional branching
  - Iteration over data
  - breaking down organizational units such as Classes
  - creating reusable blocks of code such as Functions

**Use basic types (integers, floats, strings) and interact with those types**
- the basic types in any language are the building blocks of more complex data structures. The will be a staple of your working life and you should try to get to know them in whatever language you learn.
- Most languages will give you a set of primitive data types then some more complex ones. The depth of how much help they are to you will depend on what sort of problems you come accross.
- Knowing the basics can sove you hours or even days of complex work further down the line.

# Some Demos / Basic usage of Python
"""

# Lets print a string to the console...
print("Something", "new")

# Lets create some variables
a = 10
a = "a string"
a = 1.2
a = []

a = ()
a = {"name": "Tom"}
b = []
b.append("Dave")
b.append("Bob")
b.append("Joe")
# print(type(a))
# print(a["name"])
# print(dir([]))
print(b.pop(0))
print(b)

"""# PYTHON I CODE: 5976"""

# how about conditions?
if True:
  print("this is inside the if block")
  
  if 1 != 1:
    print("one is one")

    


else:
  print("this is the else block")

# lets get some reps in...
# n = 10
# while n > 0:
#   print("Hello")
#   n -= 1
a = ["Dave"] * 25
a[20] = "Steve"
# for n in range(12, 25):
#   print(a[n])


for x in enumerate(a):
  i = x[0]
  e = x[1]
  if i == 9:
    continue
  print(i)
  print(e)

# take some input from the user
a = int(input("input a number! "))
b = int(input("input a number! "))4
print(f"{a + b}")

"""# PYTHON I CODE: 5976"""

# lets reuse some code...
def greet(name="world!"):
  print(type(name))
  print(f"Hello {name}")




greet("1234")

# lets play with some strings
# ['capitalize', 'casefold', 'center', 'count', 'encode', 'endswith', 'expandtabs', 'find', 'format', 'format_map', 'index', 'isalnum', 'isalpha', 'isascii', 'isdecimal', 'isdigit', 'isidentifier', 'islower', 'isnumeric', 'isprintable', 'isspace', 'istitle', 'isupper', 'join', 'ljust', 'lower', 'lstrip', 'maketrans', 'partition', 'replace', 'rfind', 'rindex', 'rjust', 'rpartition', 'rsplit', 'rstrip', 'split', 'splitlines', 'startswith', 'strip', 'swapcase', 'title', 'translate', 'upper', 'zfill']
# print(dir(""))
print(help("".count))
a = "aabbccqqqq"
print(a.count("q"))

# Lets put it all together

"""# Challenges"""

"""
Challenge #1:
Create a function that takes two numbers as arguments and return their sum.
Examples:
- addition(3, 2) ➞ 5
- addition(-3, -6) ➞ -9
- addition(7, 3) ➞ 10
"""
def addition(a, b):
    # Your code here

"""
Challenge #2:
Write a function that takes an integer `minutes` and converts it to seconds.
Examples:
- convert(5) ➞ 300
- convert(3) ➞ 180
- convert(2) ➞ 120
"""
def convert(minutes):
    # Your code here

"""
Challenge #3:
Create a function that takes a string and returns it as an integer.
Examples:
- string_int("6") ➞ 6
- string_int("1000") ➞ 1000
- string_int("12") ➞ 12
"""
def string_int(txt):
    # Your code here

"""
Challenge #4:
Create a function that takes length and width and finds the perimeter of a
rectangle.
Examples:
- find_perimeter(6, 7) ➞ 26
- find_perimeter(20, 10) ➞ 60
- find_perimeter(2, 9) ➞ 22
"""
def find_perimeter(length, width):

"""
Challenge #5:
Create a function that returns a list of strings sorted by length in ascending
order.
Examples:
- sort_by_length(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]
- sort_by_length(["apple", "pie", "shortcake"]) ➞ ["pie", "apple", "shortcake"]
- sort_by_length(["may", "april", "september", "august"]) ➞ ["may", "april", "august", "september"]
- sort_by_length([]) ➞ []
"""
def sort_by_length(lst):

"""
Challenge #6:
Create a function that takes a string, checks if it has the same number of "x"s
and "o"s and returns either True or False.
- Return a boolean value (True or False).
- The string can contain any character.
- When no x and no o are in the string, return True.
Examples:
- XO("ooxx") ➞ True
- XO("xooxx") ➞ False
- XO("ooxXm") ➞ True (Case insensitive)
- XO("zpzpzpp") ➞ True (Returns True if no x and o)
- XO("zzoo") ➞ False
"""
def XO(txt):

"""
Challenge #7:
Given an unsorted list, create a function that returns the nth smallest element
(the smallest element is the first smallest, the second smallest element is the
second smallest, etc).
Examples:
- nth_smallest([7, 5, 3, 1], 1) ➞ 1
- nth_smallest([1, 3, 5, 7], 3) ➞ 5
- nth_smallest([1, 3, 5, 7], 5) ➞ None
- nth_smallest([7, 3, 5, 1], 2) ➞ 3
"""
def nth_smallest(lst, n):

"""
Challenge #8:
Create a function that returns the number of arguments it was called with.
Examples:
- num_args() ➞ 0
- num_args("foo") ➞ 1
- num_args("foo", "bar") ➞ 2
- num_args(True, False) ➞ 2
- num_args({}) ➞ 1
"""
def num_args():

"""
Challenge #9:
Write a function that creates a dictionary with each (key, value) pair being
the (lower case, upper case) versions of a letter, respectively.
Examples:
- mapping(["p", "s"]) ➞ { "p": "P", "s": "S" }
- mapping(["a", "b", "c"]) ➞ { "a": "A", "b": "B", "c": "C" }
- mapping(["a", "v", "y", "z"]) ➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" }
Notes:
- All of the letters in the input list will always be lowercase.
"""
def mapping(letters):

"""
Challenge #10:
Create a function that applies a discount d to every number in the list.
Examples:
- get_discounts([2, 4, 6, 11], "50%") ➞ [1, 2, 3, 5.5]
- get_discounts([10, 20, 40, 80], "75%") ➞ [7.5, 15, 30, 60]
- get_discounts([100], "45%") ➞ [45]
Notes:
- The discount is the percentage of the original price (i.e the discount of
"75%" to 12 would be 9 as opposed to taking off 75% (making 3)).
- There won't be any awkward decimal numbers, only 0.5 to deal with.
"""
def get_discounts(nums, percentage):