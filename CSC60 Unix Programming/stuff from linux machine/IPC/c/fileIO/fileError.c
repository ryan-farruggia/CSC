// THIS PROGRAM SHOWS THE ERRNO WHEN A FILE IS NOT FOUND
#include <stdio.h>
#include <stdlib.h>
#include <errno.h>
int main ( ) 
{
  FILE *fp = fopen ( "./non-existing-file.class", "r");

  if ( fp == NULL ) {
    printf ( "The errno is %d \n", errno );
    perror ( "My demo failed:");
    printf ( "What is the ErrNo String %s \n", strerror ( errno ) );
    exit (0);
  }

}
