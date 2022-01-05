#include <stdio.h>
#include <stdlib.h>
#include <sys/times.h>
#include <time.h>
#include <unistd.h>


int count = 2;  // SHARED VARIABLE AMONG THREADS
int numOfPrimes = 0;
void countNumberOfPrimeNumber( )  
{
  do {

   int num = 2;
   for ( num = 2 ; num < count ; num++ )
      {
         if ( count%num == 0 )
            break;
      }
   if ( num == count) { 
      numOfPrimes++;
      //printf ( "prime number : %d %d \n", numOfPrimes, count);
   }

    count++;
  } while ( count < 150000 );
}

main()
{

     pthread_t T1, T2;

     int  id1, id2; 

     clock_t start, end;

   struct tms st_start, st_end;
   start = times (&st_start);

     countNumberOfPrimeNumber( ) ; 
   end = times (&st_end);

printf ( "Time taken by system command %6.2f \n", (float)( end-start)/sysconf( _SC_CLK_TCK ) );

printf ( "Time taken by parent process in User mode %6.2f \n", (float)( st_end.tms_utime)/sysconf( _SC_CLK_TCK ) );
printf ( "Time taken by parent process in Kernel mode %6.2f \n", (float)( st_end.tms_stime)/sysconf( _SC_CLK_TCK ) );

printf ( "Time taken by child process in user mode %6.2f \n", (float)( st_end.tms_cutime)/sysconf( _SC_CLK_TCK ) );
printf ( "Time taken by child process in kernel mode %6.2f \n", (float)( st_end.tms_cstime)/sysconf( _SC_CLK_TCK ) );


     printf ( "Number of prime numbers : %d \n", numOfPrimes );

}
