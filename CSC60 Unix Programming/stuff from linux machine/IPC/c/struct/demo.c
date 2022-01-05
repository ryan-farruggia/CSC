#include <stdio.h>
#include <string.h>

struct _profile {
 short age;
 char gender;
} ;


void doPrint ( struct _profile *p1) 
{
  printf ( "printing in the function doPrint age=%d \n", p1->age ) ; 
}

int main ( ) 
{
  struct _profile d1 , d2,  *ptr , data[3] ;

  printf ( "size of data array %d \n", sizeof ( data) ) ;  // OR
  d1.age = 30;
  d1.gender = 'M';
  ptr =  &d1;
  
 // doPrint ( &d1 ) ;  // alternate way to doPrint
 // doPrint ( ptr ) ;

//  printf ( "age=%d \n", d1.age ) ;  // OR
//  printf ( "age=%d \n", (*ptr).age ) ; // alternate way
//  printf ( "age=%d \n", ptr->age ) ; 

//  data[0] = d1; 
//  data[1] = d2;

//  d2 = d1;   // YOU CAN assign one structure to another

  data[0].age = 40;
  data[0].gender = 'M';
  data[1].age = 50;
  data[1].gender = 'M';
  data[2].age = 60;
  data[2].gender = 'F';
  
  ptr = &data[0];  // ONE WAY
  doPrint ( ptr ) ;

  ptr++;  // another way
  doPrint ( ptr ) ;

  ptr = data + 2; // index
  doPrint ( ptr ) ;
  









  
}

