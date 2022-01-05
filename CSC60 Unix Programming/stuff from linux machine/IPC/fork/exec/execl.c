//execl requires full path

#include  <stdio.h>
#include  <sys/types.h>
  #include <unistd.h>

void  main( void )
{
     pid_t  pid;
  int status;
     pid = fork();  // creates a new process
     if (pid == 0)  { // child process
       execl("/bin/pwd", "Hello2021", "" ,    (char *)NULL ) ;
     } else {
       wait ( pid, &status);  
       printf("I am the parent process My id is: %d \n", getpid(  )  );
       printf("My Child's id is:  %d ***\n", pid  ) ;
     }
}

