#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include <pthread.h>


void * hello_fun(void * args){

   for ( ; ; )  ;

  return NULL;
}

int main(int argc, char * argv[]){

  pthread_t pth1, pth2, pth3, pth4 ;  

    pthread_create(&pth1, NULL, hello_fun, NULL);
    pthread_create(&pth2, NULL, hello_fun, NULL);
    pthread_create(&pth3, NULL, hello_fun, NULL);
    pthread_create(&pth4, NULL, hello_fun, NULL);

    pthread_join(pth1, NULL);
    pthread_join(pth2, NULL);
    pthread_join(pth3, NULL);
    pthread_join(pth4, NULL);

  return 0;
}

