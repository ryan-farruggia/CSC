#include <stdio.h>

main( int argc ,  char *argv [  ]  )

{
  
  char *ptr = "Hello World";
  char array[15] = "Hello World 2";

  ptr  = array;
  printf (" %s \n", ptr);

  printf (" Number of arguments is %d \n", argc)  ;

  printf (" name of the program is %s \n", argv [ 0 ] ) ;
  
  printf (" first argument is %s \n ", argv [ 1 ] );
  
  printf (" 2nd argument is %s \n ", argv [ 2 ] );

  printf (" 3rd argument is %s \n ", argv [ 3 ] );
  
  printf (" 3rd argument is %s \n ", argv [ 4 ] );
}


