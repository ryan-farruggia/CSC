// run the program in the background
// kill -SIGHUP processID
// You should see the file status.txt being created

#include <stdio.h>
#include <signal.h>

void signal_hup_handler ( int signum )
{
 printf ( "Hanging Up \n");
}

int main( )
{
  signal ( SIGHUP, signal_hup_handler );
  sleep (60);
}
