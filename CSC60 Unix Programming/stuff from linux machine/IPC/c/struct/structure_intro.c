#include <stdio.h>
#include "structure_header.h"
 

struct _test v1, v2, v11, *s1, *s2, v3[5];
struct _test v6;  /* example */

/*  we could have defined structure variables while defining the structure itself 
struct _test {
  unsigned int m1 ;
  unsigned char m2 ;
  unsigned short m3 ;
  unsigned char m4;
} v1, v2, *s1, *s2, v3[5] ;
 
*/


int size_of_a_structure = sizeof ( struct _test ) ; 

main ( ) 
{
  /* CALCULATE THE SIZEOF A STRUCTURE */

  /* size of structure is not sum of sizeof of each member */
  /* it is multiple of the sizeof the largest datatype */
  /* in our example, int is the largest datatype. So it will be some multiple of 4 */
  printf ( "The size of the structure %ld \n", size_of_a_structure );

  /* SHOW THE GAPS and PADDING */ 
  printf ( "address of m1=%p \n", &v1.m1 );
  printf ( "address of m2=%p \n", &v1.m2 );
  printf ( " GAP of one byte at %p \n", (&v1.m2 + 1) );
  printf ( "address of m3=%p \n", &v1.m3 );
  printf ( "address of m4=%p \n", &v1.m4 );
  printf ( " PADDING of three bytes at %p \n", (&v1.m4 + 1) );
  

  /* INITIALIZING STRUCTURE MEMBER */

  struct _test v7 = { 0x50, 65, 0x30, 97 } ;  /* m1 is set to 0x50, m2='A', m3=0x30, m4='a' */
  struct _test v8 = { 0x50, 65  } ;  /* m1 is set to 0x50, m2='A', m3=0, m4=0 */
  struct _test v9 = { 0} ;   /* all set to zero */
  struct _test v10 = v7 ;   /* okay to assign one structure to another of same type */
  struct _test v11[3] = 
    { { 0x50, 'A', 0x30, 'a'}, { 0x60, 'B' }, { 0x70,'C'} }; /* initialize an array */

  v1 = v10 ;  /* is also okay */ 

 /* ACCESS USING DOT MEMBERS */
  printf("v1.m1=%d v1.m2=%d\n", v1.m1, v1.m2);

 /* ACCESS VIA POINTERS USING ARROW OPERATOR */
  s1 = &v1;   
  printf("s1.m1=%d s1.m2=%d\n", (*s1).m1, (*s1).m2);
  printf("s1->m1%d s1->m2=%d\n", s1->m1, s1->m2);
 
  /* PASS STRUCTURE TO FUNCTION BY VALUE */ 
  print_structure ( v1 ) ;
  update_structure ( &v1 ) ; /* Alternatively using pointer,  updatestructure ( s1 ) ; */

  /* TYPEDEF definition */
  TEST_T v12 ;  
  v12.m1 = 0x60;
  v12.m2 = 'C' ;
  /* Alternatively we could have done , TEST v12 = { 0x60, 'C' } ; */

  print_structure_T ( v12 ) ;
  update_structure_T ( &v12 ) ;
  

  /* ACCESS ARRAY OF STRUCTURES WITH POINTERS */
  print_array_of_structures ( v11 , sizeof ( v11) / sizeof( v11[0]) );

  /* Nested Structures */

  TEST2_T  v14 = { 0, { 0x50, 'A', 0x5, 'c'} } ;
  
  print_nested_structure   ( v14 ); 

}

void print_structure ( struct _test aStr )
{
   printf ( "Enter Print_structure function \n" );
   printf ( "m1=%x m2=%c\n", aStr.m1, aStr.m2);
   printf ( "EXIT Print_structure function \n" );
}  

void update_structure ( struct _test *strPtr )
{
   printf ( "Enter update_structure function \n" );
   (strPtr->m1)++; /* Alternatively  (*strPtr).m1++ */
   strPtr->m2 = 'B';
   print_structure ( *strPtr ) ;
   printf ( "EXIT update_structure function \n" );
}

void print_structure_T ( TEST_T  aStr )
{
   printf ( "Enter Print_structure_T function \n" );
   printf ( "m1=%x m2=%c\n", aStr.m1, aStr.m2);
   printf ( "EXIT Print_structure function \n" );
}  

void update_structure_T ( TEST_T *strPtr )
{
   printf ( "Enter update_structure function \n" );
   (strPtr->m1)++; /* Alternatively  (*strPtr).m1++ */
   strPtr->m2 = 'B';
   print_structure ( *strPtr ) ;
   printf ( "EXIT update_structure function \n" );
}


void print_array_of_structures ( struct _test data[ ], int noCells ) 
{
   int i = 0;
   for ( i = 0 ; i < noCells ; i++ )
      printf ( "data[%d] m1=%x m2=%c \n", i, data[i].m1 , data[i].m2);
   /* alternatively using pointers
      printf ( "data[%d] m1=%x m2=%c \n", i, (data+i)->m1 , (data+i)->m2);
   */

}

void  print_nested_structure   ( TEST2_T aNestedStr )
{
   printf ( "Enter Print_nested_structure \n");
   printf ( "index=%d n1.m1=%x n1.m2=%c\n", aNestedStr.index, aNestedStr.n1.m1, aNestedStr.n1.m2);
   printf ( "Exit Print_nested_structure \n");

}
