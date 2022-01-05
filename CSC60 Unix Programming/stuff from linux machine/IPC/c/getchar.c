#include <stdio.h>
int main ( ) 
{
  char ch;

#if 0   // preprocessor 
  ch = (char) getchar ( ) ;  // read a character
  putchar ( ch ) ;
  putchar ( '\n' ) ;  // single quote a character constant

  ch = (char) getchar ( ) ;  // read a character
  putchar ( ch ) ;
  putchar ( '\n' ) ;  // single quote a character constant

  ch = (char) getchar ( ) ;  // read a character
  putchar ( ch ) ;
  putchar ( '\n' ) ;  // single quote a character constant
#endif

  ch = (char) getchar ( ) ;  // read a character
  while ( ch != '\n' ) {
     putchar ( ch ) ;
     putchar ( '\n' ) ;  // single quote a character constant
     ch = (char) getchar ( ) ;  // read a character
  }

 return 0;
}

  
