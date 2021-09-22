sink("file.txt", append = T, 
split = FALSE) # Direct text to "file.txt"

print("hello world") 
print("hello world again")

shell.exec("file.txt") # Open text file in editor 
unlink("file.txt") # Closes sink and now prints all to console

closeAllConnections()