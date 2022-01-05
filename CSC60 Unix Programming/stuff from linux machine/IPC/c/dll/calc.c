#include <stdio.h>
extern int add ( int, int);
extern int mult ( int, int);
extern int sub ( int, int);
int main ( ) 
{
  printf ( " adding 4 and 5 =%d \n", add ( 4, 5) ) ;
  printf ( " sub 4 and 5 =%d \n", sub ( 4, 5) ) ;
}
  
