
#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main ( )
{
 // COMMENT ALL THE LINES EXCEPT ONE 
   char data [ 16 ] = "aa";
  //char data [ 16 ] = "Hello";
  //char data [ 16 ] = "CSU";
  //char data [ 16 ] = "happy";

  unsigned char len = strlen ( data);  // returns the length of data

  int i = 0, temp = 0 ;

  for ( i = 0 ; i < len ; i++) 
   {
      char ch = toupper ( data [ i] );    // converts lower case to upper case 
      
      if ( temp & ( 1 << ( ch - 65 )  ) )   //it was i,  it should be 1
      {
       printf ( " THis is not good a string \n") ; 
       // you could call printBits function here to see the value of temp
       return 0;   // added return 
      }
      else {
       temp = temp | ( 1 << ( ch - 65 ) ) ;  // it was <, it should be <<
       // you could call printBits function here to see the value of temp
       }
   }
  
  printf ( "This is a good string\n");

}
