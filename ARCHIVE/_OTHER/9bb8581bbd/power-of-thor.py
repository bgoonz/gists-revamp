# LX: the X position of the light of power
# LY: the Y position of the light of power
# TX: Thor's starting X position
# TY: Thor's starting Y position
LX, LY, TX, TY = [int(i) for i in input().split()]


# game loop
while 1:
    E = int(input())

    direction = ''
    if LY > TY:
        direction += 'S'
        TY += 1
    elif LY < TY:
        direction += 'N'
        TY -= 1
    if LX > TX:
        direction += 'E'
        TX += 1
    elif LX < TX:
        direction += 'W'
        TX -= 1

    print(direction)