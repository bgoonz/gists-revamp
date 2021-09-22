Python
======

-   Python is an interpreted, high-level and general-purpose, dynamically typed programming language

-   It is also Object oriented, modular oriented and a scripting language.

-   In Python, everything is considered as an Object.

-   A python file has an extension of .py

-   Python follows Indentation to separate code blocks instead of flower brackets({}).

-   We can run a python file by the following command in cmd(Windows) or shell(mac/linux).

    `python <filename.py>`

#### By default, the python doesn’t require any imports to run a python file.

Create and execute a program
----------------------------

1.  Open up a terminal/cmd
2.  Create the program: nano/cat &gt; nameProgram.py
3.  Write the program and save it
4.  python nameProgram.py

  

### Basic Datatypes

<table><thead><tr class="header"><th>Data Type</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>int</td><td>Integer values [0, 1, -2, 3]</td></tr><tr class="even"><td>float</td><td>Floating point values [0.1, 4.532, -5.092]</td></tr><tr class="odd"><td>char</td><td>Characters [a, b, @, !, <code>] | | str | Strings [abc, AbC, A@B, sd!,</code>asa]</td></tr><tr class="even"><td>bool</td><td>Boolean Values [True, False]</td></tr><tr class="odd"><td>char</td><td>Characters [a, b, @, !, `]</td></tr><tr class="even"><td>complex</td><td>Complex numbers [2+3j, 4-1j]</td></tr></tbody></table>

  

Keywords
--------

  

<table><colgroup><col style="width: 45%" /><col style="width: 55%" /></colgroup><thead><tr class="header"><th>Keyword</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>break</td><td>used to exit loop and used to exit</td></tr><tr class="even"><td>char</td><td>basic declaration of a type character</td></tr><tr class="odd"><td>const</td><td>prefix declaration meaning variable can not be changed</td></tr><tr class="even"><td>continue</td><td>go to bottom of loop in for, while loops</td></tr><tr class="odd"><td>class</td><td>to define a class</td></tr><tr class="even"><td>def</td><td>to define a function</td></tr><tr class="odd"><td>elif</td><td>shortcut for (else if) used in else if ladder</td></tr><tr class="even"><td>else</td><td>executable statement, part of “if” structure</td></tr><tr class="odd"><td>float</td><td>basic declaration of floating point</td></tr><tr class="even"><td>for</td><td>executable statement, for loop</td></tr><tr class="odd"><td>from</td><td>executable statement, used to import only specific objects from a package</td></tr><tr class="even"><td>if</td><td>executable statement</td></tr><tr class="odd"><td>import</td><td>to import modules</td></tr><tr class="even"><td>pass</td><td>keyword to specify noting is happening in the codeblock, generally used in classes</td></tr><tr class="odd"><td>return</td><td>executable statement with or without a value</td></tr><tr class="even"><td>while</td><td>executable statement, while loop</td></tr></tbody></table>

  

Operators
---------

  

<table><thead><tr class="header"><th>Operator</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>( )</td><td>grouping parenthesis, function call, tuple declaration</td></tr><tr class="even"><td>[ ]</td><td>array indexing, also declaring lists etc.</td></tr><tr class="odd"><td>!</td><td>relational not, complement, ! a yields true or false</td></tr><tr class="even"><td>~</td><td>bitwise not, ones complement, ~a</td></tr><tr class="odd"><td>-</td><td>unary minus, - a</td></tr><tr class="even"><td>+</td><td>unary plus, + a</td></tr><tr class="odd"><td>*</td><td>multiply, a * b</td></tr><tr class="even"><td>/</td><td>divide, a / b</td></tr><tr class="odd"><td>%</td><td>modulo, a % b</td></tr><tr class="even"><td>+</td><td>add, a + b</td></tr><tr class="odd"><td>-</td><td>subtract, a - b</td></tr><tr class="even"><td>&lt;&lt;</td><td>shift left, left operand is shifted left by right operand bits</td></tr><tr class="odd"><td>&gt;&gt;</td><td>shift right, left operand is shifted right by right operand bits</td></tr><tr class="even"><td>&lt;</td><td>less than, result is true or false, a %lt; b</td></tr><tr class="odd"><td>&lt;=</td><td>less than or equal, result is true or false, a &lt;= b</td></tr><tr class="even"><td>&gt;</td><td>greater than, result is true or false, a &gt; b</td></tr><tr class="odd"><td>&gt;=</td><td>greater than or equal, result is true or false, a &gt;= b</td></tr><tr class="even"><td>==</td><td>equal, result is true or false, a == b</td></tr><tr class="odd"><td>!=</td><td>not equal, result is true or false, a != b</td></tr><tr class="even"><td>&amp;</td><td>bitwise and, a &amp; b</td></tr><tr class="odd"><td>^</td><td>bitwise exclusive or XOR, a ^ b</td></tr><tr class="even"><td>|</td><td>bitwise or, a</td></tr><tr class="odd"><td>&amp;&amp;, and</td><td>relational and, result is true or false, a &lt; b &amp;&amp; c &gt;= d</td></tr><tr class="even"><td>||, or</td><td>relational or, result is true or false, a &lt; b || c &gt;= d</td></tr><tr class="odd"><td>=</td><td>store or assignment</td></tr><tr class="even"><td>+=</td><td>add and store</td></tr><tr class="odd"><td>-=</td><td>subtract and store</td></tr><tr class="even"><td>*=</td><td>multiply and store</td></tr><tr class="odd"><td>/=</td><td>divide and store</td></tr><tr class="even"><td>%=</td><td>modulo and store</td></tr><tr class="odd"><td>&lt;&lt;=</td><td>shift left and store</td></tr><tr class="even"><td>&gt;&gt;=</td><td>shift right and store</td></tr><tr class="odd"><td>&amp;=</td><td>bitwise and and store</td></tr><tr class="even"><td>^=</td><td>bitwise exclusive or and store</td></tr><tr class="odd"><td>|=</td><td>bitwise or and store</td></tr><tr class="even"><td>,</td><td>separator as in ( y=x,z=++x )</td></tr></tbody></table>

### Basic Data Structures

### List

-   List is a collection which is ordered and changeable. Allows duplicate members.

-   Lists are created using square brackets:

    thislist = ["apple", "banana", "cherry"] 

-   List items are ordered, changeable, and allow duplicate values.

-   List items are indexed, the first item has index `[0]`, the second item has index `[1]` etc.

-   The list is changeable, meaning that we can change, add, and remove items in a list after it has been created.

-   To determine how many items a list has, use the `len()` function.

-   A list can contain different data types:

    list1 = ["abc", 34, True, 40, "male"]

-   It is also possible to use the list() constructor when creating a new list

    thislist = list(("apple", "banana", "cherry"))  # note the double round-brackets

### Tuple

-   Tuple is a collection which is ordered and unchangeable. Allows duplicate members.
-   A tuple is a collection which is ordered and unchangeable.
-   Tuples are written with round brackets.

    thistuple = ("apple", "banana", "cherry")

-   Tuple items are ordered, unchangeable, and allow duplicate values.
-   Tuple items are indexed, the first item has index `[0]`, the second item has index `[1]` etc.
-   When we say that tuples are ordered, it means that the items have a defined order, and that order will not change.

-   Tuples are unchangeable, meaning that we cannot change, add or remove items after the tuple has been created.
-   Since tuple are indexed, tuples can have items with the same value:
-   Tuples allow duplicate values:

    thistuple = ("apple", "banana", "cherry", "apple", "cherry")

-   To determine how many items a tuple has, use the `len()`function:

    thistuple = ("apple", "banana", "cherry")
    print(len(thistuple))

-   To create a tuple with only one item, you have to add a comma after the item, otherwise Python will not recognize it as a tuple.

    thistuple = ("apple",)
    print(type(thistuple))

    #NOT a tuple
    thistuple = ("apple")
    print(type(thistuple))

-   It is also possible to use the tuple() constructor to make a tuple.

    thistuple = tuple(("apple", "banana", "cherry")) # note the double round-brackets
    print(thistuple)

### Set

-   Set is a collection which is unordered and unindexed. No duplicate members.
-   A set is a collection which is both unordered and unindexed.

    thisset = {"apple", "banana", "cherry"}

-   Set items are unordered, unchangeable, and do not allow duplicate values.
-   Unordered means that the items in a set do not have a defined order.

-   Set items can appear in a different order every time you use them, and cannot be referred to by index or key.

-   Sets are unchangeable, meaning that we cannot change the items after the set has been created.
-   Duplicate values will be ignored.
-   To determine how many items a set has, use the `len()` method.

    thisset = {"apple", "banana", "cherry"}

    print(len(thisset))

-   Set items can be of any data type:

    set1 = {"apple", "banana", "cherry"}
    set2 = {1, 5, 7, 9, 3}
    set3 = {True, False, False}
    set4 = {"abc", 34, True, 40, "male"}

-   It is also possible to use the `set()` constructor to make a set.

    thisset = set(("apple", "banana", "cherry")) # note the double round-brackets

### Dictionary

-   Dictionary is a collection which is unordered and changeable. No duplicate members.
-   Dictionaries are used to store data values in key:value pairs.
-   Dictionaries are written with curly brackets, and have keys and values:

    thisdict = {
      "brand": "Ford",
      "model": "Mustang",
      "year": 1964
    }

-   Dictionary items are presented in key:value pairs, and can be referred to by using the key name.

    thisdict = {
      "brand": "Ford",
      "model": "Mustang",
      "year": 1964
    }
    print(thisdict["brand"])

-   Dictionaries are changeable, meaning that we can change, add or remove items after the dictionary has been created.
-   Dictionaries cannot have two items with the same key.
-   Duplicate values will overwrite existing values.
-   To determine how many items a dictionary has, use the `len()` function.

    print(len(thisdict))

-   The values in dictionary items can be of any data type

    thisdict = {
      "brand": "Ford",
      "electric": False,
      "year": 1964,
      "colors": ["red", "white", "blue"]
    }

### Conditional branching

        if condition:
            pass
        elif condition2:
            pass
        else:
            pass

### Loops

Python has two primitive loop commands: 1. while loops 2. for loops

#### While loop

-   With the `while` loop we can execute a set of statements as long as a condition is true.
-   Example: Print i as long as i is less than 6

    i = 1
    while i < 6:
      print(i)
      i += 1

-   The while loop requires relevant variables to be ready, in this example we need to define an indexing variable, i, which we set to 1.
-   With the `break` statement we can stop the loop even if the while condition is true
-   With the continue statement we can stop the current iteration, and continue with the next.

-   With the else statement we can run a block of code once when the condition no longer is true.

#### For loop

-   A for loop is used for iterating over a sequence (that is either a list, a tuple, a dictionary, a set, or a string).

-   This is less like the for keyword in other programming languages, and works more like an iterator method as found in other object-orientated programming languages.

-   With the for loop we can execute a set of statements, once for each item in a list, tuple, set etc.

    fruits = ["apple", "banana", "cherry"]
    for x in fruits:
      print(x)

-   The for loop does not require an indexing variable to set beforehand.
-   To loop through a set of code a specified number of times, we can use the range() function.
-   The range() function returns a sequence of numbers, starting from 0 by default, and increments by 1 (by default), and ends at a specified number.
-   The range() function defaults to increment the sequence by 1, however it is possible to specify the increment value by adding a third parameter: range(2, 30, 3).
-   The else keyword in a for loop specifies a block of code to be executed when the loop is finished. A nested loop is a loop inside a loop.

-   The “inner loop” will be executed one time for each iteration of the “outer loop”:

    adj = ["red", "big", "tasty"]
    fruits = ["apple", "banana", "cherry"]

    for x in adj:
      for y in fruits:
        print(x, y)

-   for loops cannot be empty, but if you for some reason have a for loop with no content, put in the pass statement to avoid getting an error.

    for x in [0, 1, 2]:
      pass

### Function definition

    def function_name():
        return

### Function call

    function_name()

-   We need not to specify the return type of the function.
-   Functions by default return `None`
-   We can return any datatype.
