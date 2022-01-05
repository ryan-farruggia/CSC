#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
int main (  ) 
{
  // parent
  int x = 0;
  int pid = fork (  ); 
  
  if ( pid == 0 ) {
    printf ( "child Process: id=%d parent_id=%d\n", getpid(), getppid ( )   );
    exit  ( 0 ) ;
  }
  else {
    int status; 
    wait (&status);  // whoever calls wait function, will be put in pause 
    printf ( "Parent Process: id=%d parent_id=%d\n", getpid(), getppid ( )   );
  }

}
