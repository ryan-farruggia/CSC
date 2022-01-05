#include <stdio.h>
#include <string.h>
struct _t1 {
 char ch;
 int age;
 char name[14];
} ;
 
void printStruct ( struct _t1 b )
{
  printf ( "ch=%c age=%d name=%s\n" , b.ch, b.age, b.name); 
}
void printStructByRef ( struct _t1 *c )
{
  printf ( "ch=%c age=%d name=%s\n" , (*c).ch, (*c).age, (*c).name); 
  printf ( "ARRAY: ch=%c age=%d name=%s\n" , c->ch, c->age, c->name); 
}

main ( ) 
{
  struct _t1 a , *ptr; 
  struct _t1 b ; 
  
  a.ch='L';
  a.age=42;
  strcpy ( a.name, "Sac State");
   
  printStruct (a);
  printStructByRef (&a);
  b = a;
  if ( b == a ) 
   printf ( "Yes ");
 
  

}

