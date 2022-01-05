#include <stdio.h>
#include <string.h>
int main ( )
{
 char name[16];
 int num;
// scanf ( "%s%d", name, &num);
// printf ( "name=%s number=%d\n", name, num);

// int len = strlen (name) ;
           //strlen
           //strcmp
           //strcpy 
           //strcat
           //strstr  - looks for substring
           //strchr  - looks for a char


 //len = 0;
 // while ( name[len] != '\0' )   {
 //    len++;
 // }

 //printf ( "length of the string is %d\n", len);

 FILE *fd = fopen ( "NameCommissions.txt", "r");

#if 0
 fscanf ( fd, "%s%d", name, &num);
 printf ( "name=%s num=%d ", name, num);
#endif
 char buf[1000];
 fgets ( buf, 1000, fd );
 sscanf ( buf, "%s%d", name, &num);


 char t2[16] = "Mark"; // COPY Mark into t2
 if ( strcmp ( name, t2) == 0 ) 
   printf ( "I got a match \n");
 else
   printf ( "I have no  match \n");
 





 fclose ( fd);


     
 

}
  
