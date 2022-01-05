#include <stdio.h>
#include <stdlib.h>
#include <sys/times.h>
#include <time.h>
#include <unistd.h>

int main ( )
{

   clock_t start, end;

   struct tms st_start, st_end;
   start = times (&st_start);
   system ( "~/IPC/shell/forloop/myFileSizes.sh > /dev/null 2> /dev/null " );
   end = times (&st_end);

printf ( "Time taken by system command %6.2f \n", (float)( end-start)/sysconf( _SC_CLK_TCK ) );

printf ( "Time taken by parent process in User mode %6.2f \n", (float)( st_end.tms_utime-st_start.tms_utime)/sysconf( _SC_CLK_TCK ) );
printf ( "Time taken by parent process in kernel mode %6.2f \n", (float)( st_end.tms_stime-st_start.tms_stime)/sysconf( _SC_CLK_TCK ) );

printf ( "Time taken by child process in user mode %6.2f \n", (float)( st_end.tms_cutime-st_start.tms_cutime)/sysconf( _SC_CLK_TCK ) );
printf ( "Time taken by child process in kernel mode %6.2f \n", (float)( st_end.tms_cstime-st_start.tms_cstime)/sysconf( _SC_CLK_TCK ) );

}


/*

 time_t current;
 time ( &current);
 printf ( "I am a student : %s", ctime(&current));


*/
