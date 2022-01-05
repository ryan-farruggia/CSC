// RUN THIS PROGRAM
// Because you copying s1 to s, it throws segmentation fault

#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <signal.h>

void signal_segv_handler ( int signum )
{
  printf ( "Signal Received to handle segmentation fault in sec6\n" );
  exit ( signum);
}

int main( )
{
  signal ( SIGSEGV, signal_segv_handler );
  printf ( "%d \n", SIGSEGV);

char *s = "this is ";
char *s1 = "me";  
strcat(s,s1); 
printf("%s",s);  // THIS WILL NOT PRINT, why ?

}
