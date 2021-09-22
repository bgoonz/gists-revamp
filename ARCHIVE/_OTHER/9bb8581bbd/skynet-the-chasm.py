R = int(input())  # the length of the road before the gap.
G = int(input())  # the length of the gap.
L = int(input())  # the length of the landing platform.


if G >= 5:
    max_speed = 7
elif G >= 3:
    max_speed = 5
elif G >= 2:
    max_speed = 3
else:
    max_speed = 2

# game loop
while 1:
    S = int(input())  # the motorbike's speed.
    X = int(input())  # the position on the road of the motorbike.

    if (X + S) >= R + 1:
        print("JUMP")
        while S > 0:
            print("SLOW")
    elif S == max_speed:
        print("WAIT")
    elif S > max_speed:
        print("SLOW")
    else:
        print("SPEED")