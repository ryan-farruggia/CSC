#include <stdio.h>
int main ( ) 
{
  float age ;  // 4 bytes
  printf ( " What is your age \n" );
  scanf ( "%f", &age);  // enter 34.0
  printf ( " Professor , you entered %.2f \n", age );
   printf ( " You have %f years to pay taxes \n",  65 - age);

 return 0;
}

  
