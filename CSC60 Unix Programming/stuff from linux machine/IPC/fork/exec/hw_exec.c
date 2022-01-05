//execv requires full path and all arguments should be
// in a null terminated array

#include  <stdio.h>
#include  <sys/types.h>
#include <unistd.h>
int  main( int argc, char *argv[] )
{
     pid_t  pid;

     pid = fork();  // creates a new process
     if (pid == 0)  {
       // TASK 1 : call execl to execute pwd
       execl( _______    ) ;
     } 
      else {
       printf("parent process waiting for execl to complete \n" );
     }


     pid = fork();  // creates a new process
     if (pid == 0)  {
       // TASK 2 call execv to execute ls -l
       char *args[ ] = { ______ NULL };
       execv(________) ;
     } 
      else {
       printf("parent process waiting for execv to complete \n" );
     }

     pid = fork();  // creates a new process
     if (pid == 0)  {
       // TASK 3 call execlp to execute ps -e 
       execlp(_______ ) ;
     } 
      else {
       printf("parent process waiting for execlp to complete \n" );
     }


     pid = fork( ) ;  // creates a new process
     if ( pid == 0 )  {
       // TASK 4 call execve to execute cal 
       char *myArgv [ ] = { _________  };
       char *myEnv[] = { "HOME=/usr/bin", NULL}  ;
       execve(___________, _________, myEnv) ;
     } 
      else {
       printf("parent process waiting for execve complete \n" );
     }
    
}

