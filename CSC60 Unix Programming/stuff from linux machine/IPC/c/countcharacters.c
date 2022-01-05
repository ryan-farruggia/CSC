#include <stdio.h>
#include <stdlib.h>
main ( )
{
  unsigned char count =  0;
  char ch;
  ch = getchar  ( ) ;

  while ( ch != '\n' ) {
     count++;
     ch = getchar  ( ) ;
  }
    printf ( "The number of character entered by user %d \n", count ) ;
}
