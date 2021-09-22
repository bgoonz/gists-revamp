>>> import os
>>> programa = r'C:\Program Files (x86)\mongoDB\bin\mongod.exe'
>>> parametros = r'--logpath "C:\Foo\Bar\Base\install.log" --dbpath "C:\Foo\Bar\Base\data\db" --port 1124'
>>> os.path.dirname(programa)
'C:\\Program Files (x86)\\mongoDB\\bin'
>>> os.path.basename(programa)
'mongod.exe'
>>> os.spawnl(os.P_WAIT, os.path.dirname(programa), os.path.basename(programa), parametros)
Traceback (most recent call last):
  File "<pyshell#20>", line 1, in <module>
    os.spawnl(os.P_WAIT, os.path.dirname(programa), os.path.basename(programa), parametros)
  File "C:\Python33\lib\os.py", line 922, in spawnl
    return spawnv(mode, file, args)
FileNotFoundError: [Errno 2] No such file or directory

>>> os.spawnl(os.P_WAIT, "%s %s".format(programa, parametros))
#aqui ocorre crash no pythonw