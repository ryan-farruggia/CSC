#include <stdio.h>
#include <stdlib.h>

int main ( )
{

  int x ;

  x = sizeof ( char );
  printf ( "Size of char  %d \n", x ) ;

  x = sizeof (unsigned short);
  printf ( "Size of short  %d \n", x ) ;

  printf ( "Size of int %ld \n", sizeof ( int ) ) ;
  printf ( "Size of long %ld \n", sizeof ( long ) ) ;
  printf ( "Size of long long  %ld \n", sizeof ( long long ) ) ;
  printf ( "Size of float %ld \n", sizeof ( float ) ) ;
  printf ( "Size of double %ld \n", sizeof ( double ) ) ;

 return EXIT_SUCCESS;

}
