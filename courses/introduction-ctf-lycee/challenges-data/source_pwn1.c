#include <stdio.h>
#include <stdlib.h>

void hello() {
  int admin = 0;
  char input[16];

  printf("Enter a name : ");
  gets(input);

  if(admin != 0) {
    // Something :)
  }
  else {
    printf("Hello %s\n", input);
  }
}

int main() {
  hello();
  return EXIT_SUCCESS;
}
