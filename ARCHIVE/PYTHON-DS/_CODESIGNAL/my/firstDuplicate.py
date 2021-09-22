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


arr = [1,2,3,4,5,6,7,8,8]

def firstDuplicate(a):
    nums = set()
    for i in range(len(a)):
        if a[i] in nums:
            return a[i]
        else:
            nums.add(a[i])
    return -1



print(firstDuplicate(arr))