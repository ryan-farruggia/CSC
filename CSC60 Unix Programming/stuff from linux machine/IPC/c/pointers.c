#include <stdio.h>
#include <string.h>
#include <stdlib.h>
	
int main ( )
{
  
int x = 5;
int y = 25 ;
int *p1  =  &x  ;
int *p2  ;
p2  =  &y  ;

*p1= 30  ;
*p2 = 10  ;
*p1 = 20 ; 
*p2 = 40 ;

p2 = &x ; 
p1 = &y ;
x = 50 ;

y  = 60 ;

*p1 = *p2 ;
printf ( "x=%d \n", x);
printf ( "y=%d \n", y);
printf ( "&x= %p \n", &x);
printf ( "&y= %p \n", &y);

p1 = p2 ;

printf ( "p1= %p \n", p1);
printf ( "p2= %p \n", p2);

p2 = &y ;

printf ( "p2 pointing to &y= %p \n", p2);

printf ( "*p1 %d \n", *p1);
printf ( "*p2 %d \n", *p2);

// make p1 point to x again
 x = 50, y = 60;
 p1 = &x ;
 p2 = &y ;

 int *TDArray [ 2 ] ; // array of pointers of type characters
 TDArray [0] = p1 ;   // copy address in p1 to index 0
 TDArray [1] = p2 ;   // copy address in p2 to index 1

 printf ( "index 0=%p value=%d \n ", TDArray [0], *TDArray [0]);
 printf ( "index 1=%p value=%d \n ", TDArray [1], *TDArray [1]);

 char *names[2] = { "John", "Jack"} ;  // THIS IS OKAY
 char *presidents[2] ;  // not initializing during declaration
 presidents[0] = "Reagan";  // Reagan is string constant
 presidents[1] = "Obama";  // Obama is a string constant


 printf ("index=0, names=%s\n", names[0]);
 printf ("index=1, names=%s\n", names[1]);

 printf ("index=0, presidents=%s\n", presidents[0]);
 printf ("index=1, presidents=%s\n", presidents[1]);

 // But remember, president is just pointers.
 presidents[0] = ( char *) malloc ( 32);
 strcpy ( presidents[0], "Clinton");
 presidents[1] = ( char *) malloc ( 32);
 strcpy ( presidents[1], "Bush");
 printf ("malloc index=0, presidents=%s\n", presidents[0]);
 printf ("malloc index=1, presidents=%s\n", presidents[1]);

 	
 		}
