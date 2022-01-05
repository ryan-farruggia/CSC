//execl requires full path

#include  <stdio.h>
#include  <sys/types.h>
  #include <unistd.h>

void  main( void )
{
     pid_t  pid;
  int status;
     pid = fork();  // creates a new process
     if (pid == 0)  {
      // CHILD PROCESS IS EXECUTING
       printf("I am the child process, executing: execlp  \n"  );
       execlp("sum.sh", "second variable is always dummy", "8", "9", "11",  (char *)NULL ) ;
       
     } else {
       // PARENT PROCESS IS EXECUTING
       wait ( pid, &status); 
       printf("I am the parent process My id is: %d \n", getpid(  )  );
       printf("My Child's id is:  %d ***\n", pid  ) ;
     }
}

