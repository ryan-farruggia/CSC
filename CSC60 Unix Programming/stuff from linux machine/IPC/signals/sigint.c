// RUN THIS PROGRAM. IT SLEEPS 100 seconds
// DO a CONTROL-C
// Your program will see the signal handler 
#include <stdio.h>
#include <stdlib.h>
#include <signal.h>
#include <string.h>

void interrupt_handler ( int signum )
{
    if ( signum == SIGINT ) {  // CONTROL-C
        printf ( "...I am in CS60 spring2020 class demo....\n");
        printf ( "...Good Bye.... %d \n", getpid() );
         exit ( 0);
    }
    else  
        {
            printf ( "Good Bye....\n") ;
            exit ( EXIT_SUCCESS ) ;  
        }
}

int main( )
{
  printf ( "...My process ID is %d \n", getpid() );
  signal ( SIGINT, interrupt_handler );
  while ( 1 )  { 
    sleep (1); // Infinite loop 
    printf ( "Hello I am in infinite loop \n");
   }
  
}





 // signal ( SIGQUIT, signal_handler ); // control \
    //char buf[30] ;
    //strcpy ( buf, strsignal ( signum ) ); // SAFER
    //printf("Handling signal  %d %s\n", signum, buf);
