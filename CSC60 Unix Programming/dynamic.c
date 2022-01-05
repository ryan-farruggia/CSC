
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main ( )
{

  #define MAX_SIZE 32
  #define INCREASE_SIZE_BY 10

       unsigned char *src ;
       unsigned char *dest ;

       src = ( unsigned char * ) malloc ( MAX_SIZE ) ;
       dest = ( unsigned char * ) malloc ( MAX_SIZE ) ;


       memset ( src, 255, MAX_SIZE);
       memmove ( dest, src, MAX_SIZE);


       int i = 0;

       for ( ; i < MAX_SIZE ; i++ )
       {
           printf ( "value at i=%d is %d \n", i, dest[i]);
       }

      dest = ( unsigned char * )
                 realloc ( dest, MAX_SIZE+INCREASE_SIZE_BY );

       memset ( dest + MAX_SIZE, 64, INCREASE_SIZE_BY);
       for ( ; i < MAX_SIZE+INCREASE_SIZE_BY ; i++ )
       {
           printf ( "value at i=%d is %d \n", i, dest[i]);
       }


      free ( src);


}