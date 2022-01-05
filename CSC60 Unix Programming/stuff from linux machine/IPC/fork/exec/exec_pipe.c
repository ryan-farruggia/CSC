// code to show why pipe won't work 

#include  <stdio.h>
#include  <sys/types.h>
#include <unistd.h>
int  main( int argc, char *argv[] )
{
     pid_t  pid;

     pid = fork();  // creates a new process
     if (pid == 0)  {
       execl("/bin/ls", "ls", "|", "wc", "-l",  NULL ) ;
     } 
      else {
       printf("parent process waiting for execl to complete \n" );
     }

}

