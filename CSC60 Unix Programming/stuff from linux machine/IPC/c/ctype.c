#include <stdio.h>
#include <ctype.h>
int main ( ) 
{
  if ( isalnum ( 50 ) )
    printf ( "%c is alphanum  \n", 50  );
  
  if ( isdigit ( 48) ) 
    printf ( "%c is digit  \n", 48  );

  if ( isalpha ( 65 ) )
    printf ( " %c alpha   \n", 65  );

  if ( isalpha ( 97 ) )
    printf ( " %c alpha character  \n", 97  );

  if ( iscntrl ( 13 ) )
    printf ( " %c is a control character  \n", 13  );

  if ( ispunct ( '-' ) )
    printf ( " %c is a punctuation character  \n", '-'  );
  
  if ( isxdigit ( 'F' ) )
    printf ( " %c is a hexadecimal character  \n", 'F'  );

  if ( !isxdigit ( 'G' ) )
    printf ( " %c is *NOT* a hexadecimal character  \n", 'G'  );
  
  
 
  
 

}
