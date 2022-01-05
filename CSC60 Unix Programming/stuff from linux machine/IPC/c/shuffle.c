#include <stdio.h>
#include <stdlib.h>
#include <time.h>


int main(void) 
{
  srand  ( time ( NULL)) ;
  unsigned char data [ ] = { 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J' };

  int i, len = sizeof ( data) ; // I am intentionally not using strlen
  for ( i = 0 ; i < len ; i++ )
  {
      int k = rand ( ) % (len - i) ;

      if ( k == ( len - i - 1) ) continue;

         data [ len - i - 1 ] = data [ len - i - 1 ] + data [ k] ;
         data [ k ] = data [ len - i - 1  ] - data [ k];
         data [ len - i - 1  ] = data [ len - i - 1  ] - data [k ];

  }

  for ( i = 0 ; i < len ; i++)
    printf ( "%c", data[i]);
    printf ( "\n");
  return 0;
}
