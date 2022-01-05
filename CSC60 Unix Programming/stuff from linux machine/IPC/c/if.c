#include <stdio.h>
#include <assert.h>
#include <stdlib.h>

int main ( ) 
{

  int number ;
  printf ( " Enter a number \n");
  scanf ( "%d", number) ;
  printf ( " You Entered a number=%d \n", number);

#if 0
  srand ( time  (NULL)  );
  int number =  20+ rand ( ) % ( 60 - 20 )  ;
  printf ( "randome number is %d \n", number ) ;

   int y  = 0 , x = 10;
   for ( int z = 0 ; z < 10 ; z++ ) 
     printf ( "ok \n");

  int x = -10, y = 10;
  int z = 0 ;
  if ( z = x - y ) 
   printf ( "True \n");
  else
   printf ( "False \n");

  printf ( "value of z = %d \n", z);

  // PREPROCESSING DIRECTIVE

   unsigned char aFlag = 0, eFlag=0;
   char ch = getchar ( ) ;
   switch ( ch ) 
   {
       
      case 'A' :
         aFlag = 1;
      break;
     
      case 'a' :
          aFlag = 1;
      break;      

      case 'E' :
      case 'e' :
          eFlag = 1;
      break;
   }
    printf ( "aFlag = %d \n", aFlag);

#endif


  
}

