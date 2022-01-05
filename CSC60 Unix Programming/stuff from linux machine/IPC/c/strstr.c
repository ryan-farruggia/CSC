
#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main()
{

char s1 [ ] = "sweater" ;
char s2 [ ] = "eat";
int i = 0, j = 0, len = strlen(s1) - strlen(s2);
 
  for ( i = 0 ; i < strlen ( s1 ) ; i++ ) {
    for ( j = 0 ; j < strlen ( s2 ) ; j++ ) 
      if ( s1[ i + j ] != s2[ j ] ) 
         break;
      if ( j == strlen ( s2 ) ) {
         printf ("substring at index i = %d \n", i );
         break;
      }
   }
     if ( i == strlen ( s1 ) ) 
       printf ( "No substring %s \n", s1 );
}
