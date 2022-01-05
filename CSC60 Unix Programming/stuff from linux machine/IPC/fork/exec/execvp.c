//execvp requires no path and all arguments should be
// in a null terminated array

#include  <stdio.h>
#include  <sys/types.h>
  #include <unistd.h>

void  main( void )
{
     pid_t  pid;

     pid = fork();  // creates a new process
     if (pid == 0)  {
      // CHILD PROCESS IS EXECUTING
      char *args[ ] = { "", "-e", "-a", "-l", NULL } ;
       execvp("myshell.sh", args ) ;
       printf("I am the child process, My id is: %d \n", getpid(  )  );
       

     } else {
       // PARENT PROCESS IS EXECUTING
       printf("I am the parent process My id is: %d \n", getpid(  )  );
       printf("My Child's id is:  %d ***\n", pid  ) ;
     }
}

