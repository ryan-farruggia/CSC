#include <stdio.h>
#include <unistd.h>
int main ( )
{

  printf("process id before the system call %d \n", getpid ( ) );
  system ( "ps -al | wc -l");
  //execl ( "/bin/ps", "ps" , "-al", "|" , "wc", "-l", (char *)NULL);
  printf("process id after the system call %d \n", getpid ( ) );
}
