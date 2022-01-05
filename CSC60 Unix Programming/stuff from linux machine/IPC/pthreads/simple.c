#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <pthread.h>
pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;   // KEY

int max = 0 ;
int count = 0;

void *minusminus( void *msg )
{
    int *ptr = (int *) msg ;
    (*ptr)-- ;
    int i;


    for ( i = 0 ; i < max ;i++ ) {
          pthread_mutex_lock ( &mutex); // blocked
          count = count +  1;
          pthread_mutex_unlock ( &mutex);
    }

    printf(" Printing my yound age is  = %d \n", *ptr) ;
}

void *plusplus( void *msg )
{
    int *ptr = (int *) msg ;
    (*ptr)++ ;
    int i;

    for ( i = 0 ; i < max ;i++ ) {
          pthread_mutex_lock ( &mutex);
          count = count +  1;
          pthread_mutex_unlock ( &mutex);
    }


    printf(" Printing your old age is  = %d \n", *ptr) ;
}


main (int argc, char *argv[] )  
{
     pthread_t t1 , t2; // two threads 
     int  thread1, thread2 ;
     max = atoi ( argv[1] ); 
     int myage = 40; 
     int yourage = 21; 

   thread1 = 
      pthread_create ( &t1, NULL, minusminus, (void *) &myage);
   thread2 = 
      pthread_create ( &t2, NULL, plusplus, (void *) &yourage);

   if (thread1 == 0) 
      printf (" Thread One success \n");
   if (thread2 == 0) 
      printf (" Thread One success \n");

   pthread_join( t1 , NULL);
   pthread_join( t2 , NULL);

   printf ( "count is %d \n", count ) ;

}


