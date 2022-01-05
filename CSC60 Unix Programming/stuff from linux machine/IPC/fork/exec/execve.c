#include  <stdio.h>
#include  <sys/types.h>
#include <unistd.h>

extern char *environ[];
main  ( ) {  
   char *paramList[ ] = { "echo", "Hello World", NULL };  
   char *myenvlist[ ] = { "HOME=/gaia/class/student/srivatss",  NULL };  
   execve ( "/bin/echo", paramList, myenvlist );
}
