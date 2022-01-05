#include <stdio.h>
#include <stdlib.h>
extern etext, edata, end  ;

int y=20;  /* initialized variable */
int z;  /* uninitialized variable */

int data[10000];

int fact ( int n)
{
  
 int value;
 printf ( "address of function in Stack %p \n", &value);
  if ( n == 1) return 1;
  else
  value = n*fact( n-1);

  return value;
}
main (int argc,  char *argv[] , char **env)
{
 static int x = 10 ;
/*
 char *envP = getenv ( "PLACE");
 if ( strcmp ( envP, "AMERICA") == 0 )
   printf ( "Hey .... \n");
 else 
 if ( strcmp ( envP, "CHINA")  == 0)
   printf ( "NIHAO \n");
*/
 
 printf(" first address of env %p\n", env[0]);
 printf(" second address of env %p\n", env[1]);

 printf ("end: End of BSS data %10p  \n", &end);
 printf ("address of z not initialized %10p \n", &z);
 printf ("edata: End of Data segment %10p  \n", &edata);
 printf ("address of static x %10p \n", &x);
 printf ("address of y initialized to 10 %10p \n", &y);
 printf ("etext: End of Text segment %10p  \n", &etext);

 printf ( "address of argv[0] %p\n", argv[0]);
 printf ( "address of argv[1] %p\n", argv[1]);

 int *ptr = (int *) malloc( 64);
 int *ptr2 = (int *) malloc( 4);

 printf ( "address of ptr2 in heap memory %10p\n", ptr2);
 printf ( "address of ptr in heap memory %10p\n", ptr);

 free (ptr);
 free (ptr2);
 
 printf ( "Address of Array data %10p\n", data );

 fact(3);

 printf ( "getpid %d \n", getpid() );
 getchar ( ) ;

}

