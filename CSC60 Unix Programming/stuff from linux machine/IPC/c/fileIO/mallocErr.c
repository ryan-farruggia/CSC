// THIS PROGRAM SHOWS ERRNO WHEN MALLOC FAILS
#include <stdio.h>
#include <stdlib.h>
#include <errno.h>
#include <string.h>
int main ( ) 
{
  int *fp ;

  fp = (int *) malloc  (-10);
  if ( fp == NULL ) {
    printf ( "The errno is %d \n", errno );
    perror ( "perror:-----:");
    printf (" %s \n",  strerror ( errno ) ) ; 
    exit (0);
  }
 return 0;

}
