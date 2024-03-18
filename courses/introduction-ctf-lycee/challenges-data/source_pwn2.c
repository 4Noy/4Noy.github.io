#include <stdio.h>
#include <stdlib.h>

void flag() {
  printf("sUp3rFl@g\n");
}

int main() {
  char input[16];

  printf("Enter a name : ");
  gets(input);

  printf("Hello %s\n", input);
  
  return EXIT_SUCCESS;
}
