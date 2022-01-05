// execlp - will look into the $PATH , 
// no need for full path

#include  <stdio.h>
#include  <sys/types.h>
  #include <unistd.h>

void  main( int argc, char *argv[])
{
     pid_t  pid;

     pid = fork();  // creates a new process
     if (pid == 0)  {
      printf ( "Child is sending email \n");
      execlp ( "./sum.sh" , "sum.sh", argv[1], argv[2], argv[3], (char *) NULL);
     } else {
       int status;
       wait ( &status);
     }
}

