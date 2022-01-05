// NOT WORKING
#include <stdio.h>
#include <signal.h>
#include <string.h>

void signal_handler ( int signum )
{
    printf ( "Signal received due to stack overflow \n");
    char buf[30] ;
    strcpy ( buf, strsignal ( signum ) ); // SAFER
    printf("Handling signal  %d %s\n", signum, buf);
   
}

int factorial ( int x)
{
  
  return  x * factorial ( x -1 ) ;
}

int main( )
{
  signal ( SIGSTKFLT, signal_handler );

  int y = factorial ( 10 );

}
