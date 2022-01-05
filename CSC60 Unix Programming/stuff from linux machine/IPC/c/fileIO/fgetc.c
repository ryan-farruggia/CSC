// THIS PROGRAM DEMONSTRATES THE RETURN VALUES OF fread
// NOTE: THE RETURN VALUE IS NUMBER OF ITEMS READ, NOT BYTES
#include <stdio.h>
int main ( ) 
{
  FILE *fp = fopen ( "salary.data", "r");

  char ch = fgetc ( fp ) ;
  putchar (ch);
  fclose(fp);
}
