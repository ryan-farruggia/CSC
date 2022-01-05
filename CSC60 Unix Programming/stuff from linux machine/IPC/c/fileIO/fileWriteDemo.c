#include <stdio.h>
int main  ( )
{
   
  char ch;

  int num;
  FILE *fw ;

  fw = fopen ( "data.out", "w");

 
  ch = getchar( ) ;

  while ( ch != '\n' ) { 
     fprintf ( fw, "%c ascii %d \n", ch, ch ) ; 
     ch = getchar( ) ;
    }


 fclose ( fw );

}


  
