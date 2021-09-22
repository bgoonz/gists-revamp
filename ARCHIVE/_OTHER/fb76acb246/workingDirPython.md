```python
import os
# Takes home path and appends working folder to path
os.chdir(os.path.expanduser('~') + '\Desktop') # Set to working folder on Desktop
print(os.getcwd()) # Returns new directory

# Returns path of home directory
os.path.expanduser('~')

os.listdir() # returns list of files in new working directory
```
