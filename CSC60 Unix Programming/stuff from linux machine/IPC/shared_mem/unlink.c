#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/file.h>
#include <sys/mman.h>
#include <sys/wait.h>
 

void error_and_die(const char *msg) {
  perror(msg);
  exit(EXIT_FAILURE);
}
 
main (int argc, char *argv[ ]  ) 
{
  char memname[20];
  strcpy ( memname,  argv [1] )  ;
  int r ;

  r = shm_unlink(memname);
  if (r != 0)
    error_and_die("shm_unlink");

}
