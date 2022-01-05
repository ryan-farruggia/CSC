#include <stdio.h>
#include <stdlib.h>
#include <sys/times.h>
#include <time.h>
#include <unistd.h>
#include <pthread.h>

pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;   // KEY

int count = 2;  // SHARED VARIABLE AMONG THREADS
int numOfPrimes = 0;
void countNumberOfPrimeNumber( void *empty )  
{

  do {
   int num = 2;
   for ( num = 2 ; num < count ; num++ )
      {
         if ( count%num == 0 )
            break;
      }
   if ( num == count) { 
          pthread_mutex_lock ( &mutex); // blocked
          numOfPrimes++;
          pthread_mutex_unlock ( &mutex);
      //printf ( "prime number : %d %d \n", numOfPrimes, count);
   }

          pthread_mutex_lock ( &mutex); // blocked
          count++;
          pthread_mutex_unlock ( &mutex);
  } while ( count < 200000 );
}

main()
{
     pthread_t T1, T2;
     int  id1, id2; 
     clock_t start, end;

   struct tms st_start, st_end;
   start = times (&st_start);

     pthread_t t1 , t2, t3; // two threads 
     int  thread1 ;
     int  thread2 ;
     int  thread3 ;
   thread1 = 
      pthread_create ( &t1, NULL, countNumberOfPrimeNumber, (void *) NULL);
   thread2 = 
      pthread_create ( &t2, NULL, countNumberOfPrimeNumber, (void *) NULL);
   thread3 = 
      pthread_create ( &t3, NULL, countNumberOfPrimeNumber, (void *) NULL);

   if (thread1 == 0) 
      printf (" Thread 1 success \n");
   if (thread2 == 0) 
      printf (" Thread 2 success \n");
   if (thread3 == 0) 
      printf (" Thread 3 success \n");

   pthread_join( t1 , NULL);
   pthread_join( t2 , NULL);
   pthread_join( t3 , NULL);


   end = times (&st_end);

printf ( "Time taken by system command %6.2f \n", (float)( end-start)/sysconf( _SC_CLK_TCK ) );

printf ( "Time taken by parent process in User mode %6.2f \n", (float)( st_end.tms_utime)/sysconf( _SC_CLK_TCK ) );
printf ( "Time taken by parent process in Kernel mode %6.2f \n", (float)( st_end.tms_stime)/sysconf( _SC_CLK_TCK ) );

printf ( "Time taken by child process in user mode %6.2f \n", (float)( st_end.tms_cutime)/sysconf( _SC_CLK_TCK ) );
printf ( "Time taken by child process in kernel mode %6.2f \n", (float)( st_end.tms_cstime)/sysconf( _SC_CLK_TCK ) );


     printf ( "Number of prime numbers : %d \n", numOfPrimes );

}





