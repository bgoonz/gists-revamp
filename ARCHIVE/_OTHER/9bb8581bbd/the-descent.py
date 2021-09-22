while 1:
    SX, SY = [int(i) for i in input().split()]
    mp = []
    for i in range(8):
        MH = int(input())
        if MH > 0:
            mp.append({"position": i, "height": MH})
    mp.sort(key=lambda d: d["height"], reverse=True)
    next_fire = mp[0]["position"]

    print("FIRE") if SX == next_fire else print("HOLD")
