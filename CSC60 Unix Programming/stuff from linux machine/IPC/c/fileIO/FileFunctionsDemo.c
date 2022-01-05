#include <stdio.h>
int main  ( )
{
   
  char ch;

  int num;
  FILE *fr ;

  fr = fopen ( "./pangram.in", "r");
#if 0
  ch = fgetc (fr ) ;
  putchar ( ch);
  ch = fgetc (fr ) ;
  putchar ( ch);
  putchar ('\n');
  fscanf ( fr, "%c", &ch);
  printf (  "read-from-scanf-%c\n", ch);
#endif

  char data[40];
  fgets (data, 40, fr);
  printf ("read-from-fgets:%s", data);
  
  fread (data, 1, 26, fr);  // 2nd line
 
 
  FILE *fo;
  fo = fopen ( "junk.dat", "w");
  fwrite (data, 2, 13, fo);    // write 26 members, each is one byte
                              // or write 13 members, each is two byte
                              //
  fclose(fo);
  fclose ( fr );

}


  
