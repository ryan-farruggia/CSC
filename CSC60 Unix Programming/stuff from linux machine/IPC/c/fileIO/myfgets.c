// THIS PROGRAM DEMONSTRATES THE RETURN VALUES OF fgets
// NOTE: It reads even the end of line and then places the
// NULL terminator next
//

#include <stdio.h>
int main ( ) 
{
  FILE *fp = fopen ( "salary.data", "r");
  char buf [ 1028];
  fgets ( buf, 1028, fp ) ;
  printf ( " I READ one line from the file, I am printing the line \n");
  printf ("%s", buf ); // NO need for \n because buf already has it
}
 
