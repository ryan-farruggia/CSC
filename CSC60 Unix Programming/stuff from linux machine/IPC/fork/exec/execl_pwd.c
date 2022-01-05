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
       printf("I am the Child, my process id=:  %d ***\n", pid  ) ;
       //execl("/usr/bin/cal", "cal", "11", "2020",  (char *)NULL ) ;
       execl("/bin/pwd", "pwd",  (char *)NULL ) ;
       printf("Test message  \n"  );
     } else {
       wait ( pid, &status);  
       printf("I am the parent process My id is: %d \n", getpid(  )  );
       printf("My Child's id is:  %d ***\n", pid  ) ;
     }
}

