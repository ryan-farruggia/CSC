#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <fcntl.h>           /* For O_* constants */
#include <sys/stat.h>        /* For mode constants */
#include <semaphore.h>
#include <sys/times.h>
#include <time.h>
#include <unistd.h>
#include <assert.h>



sem_t *sem;

void PrintPrimeNumbers( int start, int step )  // FUNCTION PASSED TO THREADS
{
  int current_number = start;  // SHARED VARIABLE AMONG THREADS
  int myCopy = 0;
  int numberOfPrimeNumber = 0;
  int num  ;

  do {
    myCopy = current_number++;   // critical section
   for ( num = start ; num < myCopy/2 ; num+=step )
      {
         if ( myCopy%num == 0 )
            break;
      }
   if ( num == myCopy/2) {
    numberOfPrimeNumber++;
  }


  } while ( current_number < 200000 );
  printf ( " number of primes  %d  \n",   numberOfPrimeNumber    );
}

main( int argc, char *argv[] )
{

    unsigned int value=1, i;

     int  id1, id2, id3, id4; 

     int start = time ( NULL );
     struct tms st,end;

     int pid = fork ( ) ;
     if ( pid == 0 ) {
        PrintPrimeNumbers( 3,2 )  ; 
        exit ( 0 );
     }


    
     int fd[2]; 
     //system ( "who 1> /dev/null");
     wait ( 0);
     times ( &end);

    double tps = sysconf( _SC_CLK_TCK ); 

        printf("cpu spent on the calling process in user mode %g\n\n",  (double)end.tms_utime/tps);
        printf("cpu spent for child process in user mode  Utime %g\n\n", (double)end.tms_cutime/tps);
        printf("cpu spent on the system on behalf of the calling process %g\n\n", (double)end.tms_stime/tps);
        printf("cpu spent on the system including all children %g\n\n", (double)end.tms_cstime/tps);


}


/////////////////////

          







