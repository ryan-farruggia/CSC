#include <stdio.h>
int main ( ) 
{
  char ch;

  printf ( "Please enter  characters \n" );
  scanf ("%c", &ch);

  while ( ch != '\n' ) {
     printf ( "%d%c", ch, 10);
     scanf ("%c", &ch);
  }

 return 0;
}

  
