#include <stdio.h>
#include <string.h>

struct _name {
   int age;
   char name[14];   // padding or gaps 
};


void printArray ( struct _name d[ ] , int size  ) 
{
  int i ;
  for ( i = 0 ; i < size; i++ )
    printf ( "%d %s\n", d[i].age, d[i].name );
}

void printPtr ( struct _name *d, int size  ) 
{
  int i ;
  for ( i = 0 ; i < size; i++ )
    printf ( "%d %s\n", d->age, d->name );
}

int main (  )
{
  struct _name data[2],  *p;
  memset ( data, '\0', sizeof ( data )  );
  printf ( "%d size of data \n", sizeof ( data ) ) ;
  printf ( "%d size of pointer (system dependent ) \n", sizeof ( p ) ) ;

  printf ( "size of %d \n" ,  sizeof ( struct _name) ) ;
  
  data[0].age = 20;
  strcpy ( data[0].name , "jack");
 
  data[1].age = 40;
  strcpy ( data[1].name , "john");
 
  printArray (data, sizeof (data)/sizeof ( data[0])  )  ;

  p = data;

 

}
