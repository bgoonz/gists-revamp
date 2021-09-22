#include <stdio.h>
#include <stdlib.h>

int main(int argc, char* argv[]) {
  int content_length = 100, current_size = 0;
  char cread;
  char* content = NULL;

    do {
      cread = fgetc(stdin);
      if (cread && cread != EOF) {
        if (content==NULL) content = (char*)malloc(content_length);
        else if (current_size == content_length-2) {
          content_length *= 2;
          content = (char*)realloc(content,content_length);
        }
        if (content==NULL) {
          return 1;
        }

        content[current_size++] = cread;
      }
    } while (!feof(stdin) && cread && cread != EOF);
    content[current_size] = '\0';

    printf("%s\n",content);

    free(content);

  return 0;
}