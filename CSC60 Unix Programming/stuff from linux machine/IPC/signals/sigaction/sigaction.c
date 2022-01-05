
#include <stdio.h>
#include <stdlib.h>
#include <signal.h>
#include <string.h>

void interrupt_handler ( int signum )
{
            printf ( "Good Bye....\n") ;
}

int main( )
{
 
 sigset_t initialSet;

 sigemptyset( & initialSet) ; 

 sigaddset (  &initialSet, SIGCHLD );
 sigaddset (  &initialSet, SIGALRM );

 sigprocmask ( SIG_BLOCK, &initialSet, NULL ); 

 pause ( );

 struct sigaction  myAction;
 myAction.sa_handler = interrupt_handler;
 sigemptyset(&myAction.sa_mask);
 myAction.sa_flags = SA_NOCLDSTOP ;

 sigaction ( SIGUSR1, &myAction, NULL );
  
  
 sleep ( 50);
}




