#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

int main ( )
{
  int x = 50;
  int pid = fork () ;
  // a clone happens and returns
  if ( pid == 0 ) {

     printf ( "I am the child process, my process id is %d \n", getpid( ) );
     sleep ( 20 );
     printf ( " who is my parent %d \n", getppid ( ) );
     

  }
  else {
     int status;
     wait ( &status );
     printf ( "Parent: The child proces is = %d \n", pid );
     printf ( "Parent: The parent proces is = %d \n", getpid( ) );
     if (  WIFSIGNALED(status) )
        printf ( " Yes, child got terminated by a signal \n ");
     if ( WIFEXITED ( status) )
        printf ( " Yes child got terminated by normal process \n ");
 
  }

}

