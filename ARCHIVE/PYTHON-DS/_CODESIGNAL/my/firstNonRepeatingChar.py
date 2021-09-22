"""
*** First not repeating character ***
-------------------------------------
Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

Example

For s = "abacabad", the output should be
firstNotRepeatingCharacter(s) = 'c'.

There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

For s = "abacabaabacaba", the output should be
firstNotRepeatingCharacter(s) = '_'.

There are no characters in this string that do not repeat.
"""

s = "abacabad"


1. We iterate over the string.
2. We check if the current character is in the rest of the string.
3. If it’s not, we return it.
4. If it is, we continue to the next character.



def firstNotRepeatingCharacter(s):
    for i in range(len(s)):
        if s[i] not in s[i + 1 :] and s[i] not in s[:i]:
            return s[i]

    return "_"