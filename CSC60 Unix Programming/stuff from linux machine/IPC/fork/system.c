#include  <stdio.h>
#include  <unistd.h>
#include  <stdlib.h>
int  main( void )
{

   // READ THE WEB PAGE FOR MORE INFOR
   // http://man7.org/linux/man-pages/man3/system.3.html
   // esp system is equivalent to : fork, execl, waitpid 
   char *cmd = "pwd";

   execl("/bin/sh", "sh", "-c", cmd, (char *) NULL);

   int status = system ( "pwd" );

   printf ( " return status of system command %d \n", status);


   // Verify that the last printf statement won't print
   // because execl replaces the parent process

    printf ( " return status of execl command  \n" );


}

