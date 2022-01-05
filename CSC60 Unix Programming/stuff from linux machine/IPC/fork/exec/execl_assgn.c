//execl requires full path

#include  <stdio.h>
#include  <sys/types.h>
  #include <unistd.h>

void  main(   int argc, char *argv[])
{
     pid_t  pid;
  int status;
     pid = fork();  // creates a new process
     if (pid == 0)  {
      // CHILD PROCESS IS EXECUTING
      
       printf ( "1st argv %s\n", argv[1]);
       printf ( "2nd argv %s\n", argv[2]);
       printf ( "3rd argv %s\n", argv[3]);
       execl("sumitup.sh", "sumitup.sh", argv[1],argv[2],argv[3],   (char *)NULL ) ;

       
     } else {
       // PARENT PROCESS IS EXECUTING
       wait ( pid, &status); 
     }
}

