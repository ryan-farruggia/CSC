#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <pthread.h>

 
void *print_thread_info( void * );

void *print_thread_info( void *msg )
{
    char *ptr = (char *) msg ;
     printf(" Msg = %s \n", ptr) ;
}
void *printANumber( void *msg )
{
    int *ptr = (int *) msg ;
     printf(" New Demo in Class: My age is  = %d \n", *ptr) ;
}

struct _temp { int x , y; } ;

void *printTwoNumbers ( void *msg) 
{

  struct _temp *ptr = (struct _temp *) msg ; 
  printf ( "Printing two numbers via structure %d %d \n", ptr->x, ptr->y );
   
}


main ( )
{

     pthread_t thread1 ; // two threads 
     char *msg1 = "Sac State Spring ";
     int  threadOne ;

     int myage = 16; 
     struct _temp newData;
     newData.x = 16;
     newData.y = 32;

   threadOne = 
      pthread_create ( &thread1, NULL, printTwoNumbers, (void *) &newData);

   if (threadOne == 0) 
      printf (" Thread One success \n");

   pthread_join( thread1 , NULL);









     int  threadTwo ;
     pthread_t thread2 ; // two threads 
     char msg2[32] = "Sac State Fall  ";
   threadTwo = 
      pthread_create ( &thread2, NULL, print_thread_info, (void *)msg2);

   if (threadTwo == 0) 
      printf (" Thread One success \n");

   pthread_join( thread2 , NULL);

   pthread_exit(NULL); 

}


