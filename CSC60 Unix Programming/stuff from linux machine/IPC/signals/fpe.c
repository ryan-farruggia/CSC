#include <stdio.h>
#include <signal.h>

void signal_fpe_handler ( int signum )
{
  printf ( "Signal Received to handle FPE\n" );
}

int main( )
{
  int x = 15, y = 0;
  signal ( SIGFPE, signal_fpe_handler );
  printf ( "main function going to sleep \n");

  if (y == 0 )
    raise ( SIGFPE);  // 
  else
    printf ( " The value of x/y=%d \n", x/y);
}
