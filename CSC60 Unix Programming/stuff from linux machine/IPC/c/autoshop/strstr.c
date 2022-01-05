#include <stdio.h>
#include <string.h>
int main ( ) 
{

 char t1[16] = "Teacher";
 char t2[16] = "each";

 // char *p = strstr ( "Teach", "each"); 
 
 char *p = strstr ( t1, t2); 


 printf ( "matched = %s \n", p );
}

 
 

 
