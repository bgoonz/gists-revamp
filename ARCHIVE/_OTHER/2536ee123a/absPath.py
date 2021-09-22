from os.path import expanduser

home = expanduser("~")

path = os.path.join(home, "Desktop")

os.chdir(path)
os.listdir()
