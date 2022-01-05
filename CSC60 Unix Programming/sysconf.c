#include <stdio.h>
#include <unistd.h>
int main ( )
{
 long sz = sysconf(_SC_PAGESIZE);
 printf ( "page size = %ld \n", sz );

 sz = sysconf(_SC_OPEN_MAX);
 printf ( "maximum number of open files per process = %ld \n", sz );

 sz = sysconf(_SC_STREAM_MAX);
 printf ( "maximum number of Stream per process = %ld \n", sz );

 sz = sysconf(_SC_CHILD_MAX);
 printf ( "maximum number of process per real user ID= %ld \n", sz );

 sz = sysconf(_SC_CLK_TCK);
 printf ( "number of clock ticks per second = %ld \n", sz );
}

/*
page size = 4096
maximum number of open files per process = 1024
maximum number of Stream per process = 16
maximum number of process per real user ID= 100
number of clock ticks per second = 100
*/

