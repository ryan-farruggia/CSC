#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>

int x = 80;  // SHARED VARIABLE AMONG THREADS
pthread_mutex_t one_lock = PTHREAD_MUTEX_INITIALIZER;

void add1 ( void *a ) 
{
  // TASK 1
  // use mutex to lock before increment
  // add code to increment the global variable x by *a
  // use mutex to unlock before increment

}

void add2 ( void *b ) 
{
  // TASK 2
  // use mutex to lock before increment
  // add code to increment the global variable x by *b
  // use mutex to unlock before increment

}

void add3 ( void *c ) 
{
  // TASK 3
  // use mutex to lock before increment
  // add code to increment the global variable x by *c
  // use mutex to unlock before increment

}

int main ( ) 
{

     pthread_t T1, T2, T3;
     int a = 10, b = 20, c = 30;


     // TASK 4
     // create the thread T1 and pass the function add1
     
     // TASK 5
     // create the thread T2 and pass the function add2

     // TASK 6
     // create the thread T3 and pass the function add3

     // TASK 7
     // wait for the threads
     //
     
     // TASK 8
     // print the value of x,  it should be 140
     //
}
