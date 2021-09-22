# # O(n) solution
# def firstDuplicate(a):
#     # define a set to hold non duplicate numbers
#     nums = set()
#     for i in range(len(a)):
#         # if we hit a number that's duplicate (exists in the set) return it
#         if a[i] in nums:
#             return a[i]
#         else:
#             # else if its not duplicate add it to the set
#             nums.add(a[i])
#     # return -1 if no duplicates
#     return -1


# # print(firstDuplicate(arr))


# 1. We create a set to store the numbers we’ve seen so far.
# 2. We loop through the array.
# 3. If the current number is in the set, we return it.
# 4. Otherwise, we add the current number to the set.
# 5. If we make it to the end of the loop, we return -1.




arr = [1,2,3,4,5,6,7,8]
arr2 = [1,2,3,4,5,6,7,8,8]
def firstDuplicate(a):
    nums = set()
    for i in range(len(a)):
        if a[i] in nums:
            return a[i]
        else:
            nums.add(a[i])
    return -1



print('firstDuplicate(arr):',firstDuplicate(arr))
print('firstDuplicate(arr2):',firstDuplicate(arr2))



# firstDuplicate(arr): -1
# firstDuplicate(arr2): 8