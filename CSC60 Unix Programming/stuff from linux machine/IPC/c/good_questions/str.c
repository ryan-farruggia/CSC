#include <stdio.h>
#include <string.h>
int main ( ) 
{

char *ptr = "SCOTT" ; // scott
printf ( "%p \n", ptr);

char name[8] = "scott";
strcpy ( name, ptr);

printf ( "name=%s \n", name);
printf ( "length=%d \n", strlen ( name) );

if ( strcmp ( name, "SCOTT" ) == 0 ) 
   printf ( "They are the same strings \n");
else
if ( strcmp ( name, "scott" ) < 0 ) 
   printf ( "name is less scott \n");


}
