#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <fcntl.h>           /* For O_* constants */
#include <sys/stat.h>        /* For mode constants */
#include <semaphore.h>

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


  } while ( current_number < 800000 );
  printf ( " number of primes  %d  \n",   numberOfPrimeNumber    );
}

main( int argc, char *argv[] )
{

    unsigned int value=1, i;



     int  id1, id2, id3, id4; 



        int start = time ( NULL );
     int pid = fork ( ) ;
     if ( pid == 0 ) {
        PrintPrimeNumbers( 3,2 )  ; 
        exit ( 0 );
     }
    
     wait ( 0);

        int end = time ( NULL );
        printf ( "time taken %lf \n", (double) ( end-start));

}


/////////////////////

          







