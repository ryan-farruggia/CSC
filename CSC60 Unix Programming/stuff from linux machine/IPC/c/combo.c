#include <stdio.h>
#include <stdlib.h>
#include <math.h>

void addV ( int x, int y , int z) 
{
  z = x + y;
}
int addR ( int , int, int * ) ; // prototype

int main ( int argc , char *argv[ ] ) 
{
   int a = 10, b = 2, c ;
   addV ( a, b, c);
   printf ( " c=%d ", c );  // escape character
   addR ( a, b, &c);
   printf ( " c=%d ", c );  // escape character
   float value = powf ( (float)a, (float) b); // a to the power of b , type cast
   printf ( "value = %f \n", value);

   return EXIT_SUCCESS ; 
}
  
  
int addR ( int x, int y , int *z) 
{
  *z = x + y;
   return 0; // dummy return
}
