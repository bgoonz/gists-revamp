class queue:
    # by default pass in [] as inivial value
    def __init__(self, initialVal=[]):
        self.queue = initialVal

    # enqueue is to append to the tail of the list
    def enqueue(self, ele):
        self.queue.append(ele)
        return self.queue

    # dequeue is to remove from the head of the list
    def dequeue(self):
        return self.queue.pop(0)

    def checkQueue(self):
        print(self.queue)

    def checkHead(self):
        print(self.queue[0])

    def checkTail(self):
        print(self.queue[-1])


# 1. The class is called queue.
# 2. The __init__ method is called when the class is instantiated.
# 3. The __init__ method takes an argument, initialVal, which is the list that will be used to store the queue.
# 4. The __init__ method creates an instance variable, queue, which is initially set to initialVal.
# 5. The rest of the methods are self-explanatory.

