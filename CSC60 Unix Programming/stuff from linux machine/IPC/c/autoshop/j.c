#include <stdio.h>


void printCellValuesV1 (int buf[ ], int size   ) 
{
  printf ( " printing using array \n");
  int i = 0;
   for (  i = 0 ; i < size; i++ ) 
     printf ( "%d \n", buf[i] );
}

void printCellValuesV2 (int *buf, int size   ) 
{
  printf ( " printing using pointers \n");
  int i = 0;
   for (  i = 0 ; i < size; i++ ) 
     printf ( "%d \n", *(buf+i) );
}
void swap ( int *a, int *b) 
{
  int t = *a;
  *a = *b;
  *b = t;
  printf ( "%d %d \n", *a, *b);
}

main ( ) 
{

#if 1

  int x = 2, y = 7;
  
  // STEP 1  
   void ( * ptr ) ( int *, int * );  // DEFINE

  // STEP 2 , ASSIGN
   ptr = swap ; 
  
  // STEP 3 CALL
  ptr ( &x, &y);


  int data[2] = { 2, 7 };
  void (* pPtr  ) ( int *, int ); // DEFINE
  pPtr = printCellValuesV1;  // ASSIGN
  pPtr ( data, 2);  // CALL
  

#else
  
  int data[2] = { 2, 7 };
  //swap ( data+0, data+1) ;
  swap ( &data[0], &data[1]) ;
  printf ( "%d %d \n", data[0], data[1] ) ;

  int data[18] = { 2, 4 , 6, 8, 10, 12, 14, 16};

  printCellValuesV2( data , sizeof ( data) / sizeof ( data[0] ) ) ;

#endif

}
