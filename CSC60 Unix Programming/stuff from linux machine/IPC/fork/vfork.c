#include  <stdio.h>
#include  <unistd.h>
#include  <stdlib.h>
void  main( void )
{
     int count = 10;
     srand ( time(NULL));  // seed for a random number
     pid_t pid = vfork();  

     if (pid == 0)  {
       count = rand( ) ;  // gets you a random number
       printf ( "child process : count=%d \n" , count);
      _exit(0); // child terminated
     }
     else 
          {  // THIS IS PARENT
            // psuedo wait 
            printf ( "parent process : count=%d \n" , count);
          }

}

