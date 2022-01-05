// execlp - will look into the $PATH , 
// no need for full path

#include  <stdio.h>
#include  <sys/types.h>
  #include <unistd.h>

void  main( void )
{
     pid_t  pid;
    // muttmail.sh  emailaddress  main.c "Using muttmail NG BEE Quiz but attaching file "
    char *mailPtr = "srivatsa@csus.edu";
    char *filePtr = "ReadMe.txt";
    char *body = "Using muttmail to test attaching file " ;

     pid = fork();  // creates a new process
     if (pid == 0)  {
      // CHILD PROCESS IS EXECUTING
       execlp("muttmail.sh", "", mailPtr, filePtr, body, (char *)NULL ) ;
       

     } else {
       // PARENT PROCESS IS EXECUTING
       printf("My Child's id is:  %d ***\n", pid  ) ;
     }
}

