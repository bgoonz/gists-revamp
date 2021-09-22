char* executeProcess(char** args) {
  int p[2], p2[2], pid, output_length = 100, current_size = 0, num_args = 3, i, child_stat;
  bool error = false;
  char cread;
  char* output = NULL;
  char** cmd_args;
  std::string cmd(args[1]);
  
  // take off args[0], since will be sent into stdin of process
  std::string input_data(args[0]);
  num_args--;
  
  // copy the args array (starting at index 1) into cmd_args
  cmd_args = (char**)malloc((num_args+1)*sizeof(char*));
  for (i=0; i<num_args; i++) {
    cmd_args[i] = (char*)malloc(strlen(args[i+1]))*sizeof(char));
    strcpy(cmd_args[i],args[i+1]);
  }
  cmd_args[num_args] = (char *)0;	// mark the end of the args array for execvp()
  
  if (pipe(p) == -1) {
    error = true;
  }
  if (pipe(p2) == -1) {
    error = true;
  }
  
  if (!error) {
    pid = fork();
    switch (pid) {
      case -1: // error
        error = true;

      case 0: // child process
        close(p2[0]);
        close(p[1]);
		
        close(1);	// close regular stdout
        dup(p2[1]); // redirect pipe2 write end to be stdin of this child process
        close(p2[1]); // pipe not needed anymore
		
        close(0);	// close regular stdin
        dup(p[0]); // redirect pipe1 read end to be stdin of this child process
        close(p[0]); // pipe not needed anymore

        execvp(cmd.c_str(),cmd_args);
        exit(1);	// if we get here, the execute didn't work, so bail on child process
	  
      default: // parent process
        close(p[0]);
        close(p2[1]);
        if (input_data != "") {
          write(p[1],input_data.c_str(),strlen(input_data.c_str()));
        }
        close(p[1]);
	  
        waitpid(pid,&child_stat,0);
        if (child_stat != 0) {
          error = true;
        }
        else {
          while ((read(p2[0],&cread,1)) && (cread != EOF)) {
            if (output==NULL) output = (char*)malloc(output_length*sizeof(char));
            else if (current_size == output_length-2) {
              output_length *= 2;
              output = (char*)realloc(output,output_length);
            }
            if (output!=NULL) {
              output[current_size++] = cread;
            }
            else {
              error = true;
            }
          }
        }
        if (!error && output!=NULL) {
          output[current_size] = '\0';
        }
    }
  }

  close(p2[0]);	// close rest of pipe
  
  for (i=0; i<num_args; i++) free(cmd_args[i]);
  free(cmd_args);
  
  if (!error) {
    return output;
  }
  return NULL;
}
