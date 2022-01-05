#include  <stdio.h>
#include  <unistd.h>
#include  <stdlib.h>
void  main( void )
{

   // READ THE WEB PAGE FOR MORE INFOR
   // http://man7.org/linux/man-pages/man3/system.3.html
   // esp system is equivalent to : fork, execl, waitpid 
   char *cmd = 
  "test | mutt -s \"test subject \" quinnroemer@csus.edu -a data.txt ";

   int status = system ( cmd );



}

