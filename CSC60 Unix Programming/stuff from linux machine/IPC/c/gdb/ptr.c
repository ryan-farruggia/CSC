#include <stdio.h>
int main ( )
{
  int x = 20;
  int *ptr;
  
  ptr = &x;
  printf ( "x = %d \n", x);
  printf ( "ptr = %d \n", *ptr);
}
