
# 1. Create a linked list with three nodes.
# 2. Iterate through the linked list and print the value of each node.
# 3. Insert a new node with value of 5 between the secondNode and thirdNode.
# 4. Remove the node with value of 5.



class ListNode:
    def _init_(self, val):
        self.val = val
        self.next = None


# initiation of linked list
headNode = ListNode(1)
secondNode = ListNode(2)
thirdNode = ListNode(3)

headNode.next = secondNode
secondNode.next = thirdNode

# iterate through the linked list
curNode = headNode
while curNode:
    print(curNode.val)
    curNode = curNode.next

# insert new listnode with value of 5 in between the secondNode and thirdNode
curNode = headNode
while curNode.val != 2:
    curNode = curNode.next
newNode = ListNode(5)
newNode.next = curNode.next
curNode.next = newNode

# remove the listnode with value of 5
curNode = headNode
while curNode.next.val != 5:
    curNode = curNode.next
    curNode.next = curNode.next.next
