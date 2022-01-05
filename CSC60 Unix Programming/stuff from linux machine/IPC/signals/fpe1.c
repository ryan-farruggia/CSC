#include <stdio.h>
#include <stdlib.h>
#include <signal.h>

void signal_fpe_handler ( int signum )
{
  printf ( "Signal Received to handle FPE\n" );
  //exit ( EXIT_SUCCESS);
}

int main( )
{
  int x = 15, y = 0;
  signal ( SIGFPE, signal_fpe_handler );

  x = x / y ;

  // YOU WOULD SEE INFINITE printf statements
  printf ( "returned after handling the signal\n" );
  
}
