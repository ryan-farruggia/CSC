
#include <stdio.h>
#include <stdlib.h>
int getANumber( ) 
{
  int x;
  x = rand ( ) ; 
  return x ;  // simply return rand ( ) 
}

void getANumberR( int *number) 
{
  *number  = rand ( ) ; 
}


int main ( int argc , char *argv[ ] ) 
{
   srand (time ( NULL) ) ;
   
   printf ( " rand number =%d \n",  getANumber ( ) ) ;
   int value;
   getANumberR(&value )  ;
   printf ( " rand number =%d \n",  value ) ;

   return EXIT_SUCCESS ; 
}
  
  
int addR ( int x, int y , int *z) 
{
  *z = x + y;
   return 0; // dummy return
}
