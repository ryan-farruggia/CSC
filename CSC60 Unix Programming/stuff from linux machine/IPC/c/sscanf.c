#include <stdio.h>
#include <stdlib.h>
int main ( ) 
{
  char data[32] = "CSCU 60 30 sacramento";

  char college[13];
  char city[13];

  int cnum, numStudent;


  FILE *fp;

  fp = fopen ( "userdata.txt", "r");
  if ( fp == NULL ) 
  {
     exit (1); 

  }

  fgets ( data, sizeof ( data), fp); // HINT: skipping one line:
  fgets ( data, sizeof ( data), fp);
  char *ptr =  fgets ( data, sizeof ( data), fp); // EOF 
  if ( ptr == NULL )  {
     printf ( "NOTHING TO READ, REACHED EOF \n");
     return 0;
  }
     


  sscanf ( data, "%s %d %d %s", college, &cnum, &numStudent, city);

  printf ( " %s %s %d %d ", college, city, cnum, numStudent );

}

