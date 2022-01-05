// THIS PROGRAM DEMONSTRATES THE RETURN VALUES OF fread
// NOTE: THE RETURN VALUE IS NUMBER OF ITEMS READ, NOT BYTES
#include <stdio.h>
int main ( ) 
{
  FILE *fp = fopen ( "salary.data", "r");
  char data[30] = {0};
  int num = fread ( (void *) data,  1, 10, fp); // read 10 characters
  printf ( "The data we read is |%s| \n", data );
  printf ( "number of char read is %d \n",  num);

  fclose ( fp );
}
