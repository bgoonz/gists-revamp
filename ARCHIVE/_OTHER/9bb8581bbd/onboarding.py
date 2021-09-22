# game loop
while 1:
    enemy1, dist1 = input(), int(input())
    enemy2, dist2 = input(), int(input())

    print(enemy1) if dist1 < dist2 else print(enemy2)