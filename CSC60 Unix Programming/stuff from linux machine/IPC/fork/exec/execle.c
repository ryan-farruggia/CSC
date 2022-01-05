//execl requires full path

#include  <stdio.h>
#include  <sys/types.h>
  #include <unistd.h>

void  main( void )
{
     pid_t  pid;
  int status;
  int x;
     pid = fork();  // creates a new process
     if (pid == 0)  {
            char *env[ ] = {"COURSE=CSC60", "SECTION=EVENING", NULL } ;
            execle("./exec.sh", "./exec.sh", "execl", NULL , env) ;
     } else {
       // PARENT PROCESS IS EXECUTING
       wait ( pid, &status); 
       printf("I am the parent process, My id is: %d \n", getpid(  )  );
       printf("My Child's id is:  %d is executing execle.sh\n", pid  ) ;
     }
}

