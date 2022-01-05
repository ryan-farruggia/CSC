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
       execl("/bin/pwd", "pwd",  NULL ) ;
     } 
      else {
       printf("parent process waiting for execl to complete \n" );
     }


     pid = fork();  // creates a new process
     if (pid == 0)  {
       // TASK 2 call execv to execute ls -l
       char *args[ ] = { "ls", "-l",  NULL };
       execv("/bin/ls",   args ) ;
     } 
      else {
       printf("parent process waiting for execv to complete \n" );
     }

     pid = fork();  // creates a new process
     if (pid == 0)  {
       // TASK 3 call execlp to execute ps -e 
       execlp("ps", "-e",  NULL ) ;
     } 
      else {
       printf("parent process waiting for execlp to complete \n" );
     }


     pid = fork( ) ;  // creates a new process
     if ( pid == 0 )  {
       // TASK 4 call execve to execute cal 
       char *myArgv [ ] = { "cal",  NULL };
       char *myEnv[] = { "HOME=/usr/bin", NULL}  ;
       execve("/usr/bin/cal", myArgv, myEnv) ;
     } 
      else {
       printf("parent process waiting for execve complete \n" );
     }
    
}

