#include  <stdio.h>
#include  <sys/types.h>
#include <stdlib.h>

void  main( void )
{
     pid_t  pid;

     pid = fork();  // creates a new process
     if (pid == 0)  {
       sleep ( 4 );
       // CHILD PROCESS IS EXECUTING
       printf("child: My id is: %d \n", getpid(  )  );
       printf("child: My parent=id is: %d \n", getppid(  )  ); // should be ROOT PROCESS ID
       exit(0);
     } else {
       // PARENT PROCESS IS EXECUTING
       printf("Parent: bye bye child \n"  );
       exit ( 0 );
       int status;
       wait ( &status) ; // Blocking call
       printf("Parent:My id is: %d \n", getpid(  )  );
       printf("Parent:My Child's id is:  %d ***\n", pid  ) ;
     }
}

