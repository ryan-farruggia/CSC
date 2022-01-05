#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>

int count = 0;  // SHARED VARIABLE AMONG THREADS

void *countOddNumbers( void *ptr )  // FUNCTION PASSED TO THREADS
{
  int low, high;
  low =  * ( (int *)ptr) ;
  high = low + 5000000 ;

  int i ;
  for (i = low ; i < high ; i++)  {
        if  ( ( i % 2 ) == 0 ) {  // check for odd number
           count++; // increment if even.  THIS IS THE SHARED VARIABLE
        }
  }

   pthread_exit((void*) 0);
}

main()
{

     pthread_t T1, T2;
     int start_t1 = 1;
     int start_t2 = 5000001;

     int  id1, id2; 

     id1 = pthread_create( &T1, NULL, countOddNumbers, (void*) &start_t1);
     id2 = pthread_create( &T2, NULL, countOddNumbers, (void*) &start_t2);

     if ( id1 ) perror ( "thread creation error ");
     if ( id2 ) perror ( "thread creation error ");

     pthread_join( T1, NULL);
     pthread_join( T2, NULL); 

     int i ;

     printf ( "The number of odd numbers is:  %d  \n", count );

pthread_exit(NULL);
}



