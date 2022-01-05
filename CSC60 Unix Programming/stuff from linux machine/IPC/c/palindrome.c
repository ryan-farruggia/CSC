#include <stdio.h>
#include <string.h>
int main ( ) 
{
char name[32]  ;
printf ( "Enter a string please \n");
scanf ( "%s", name ) ;
printf ( "You entered a string :%s \n", name ) ;

 int i , flag = 1;

 int len = strlen ( name);
 printf ( "len %d \n", len );
#if 0
 for ( i = 0 ; i < (len - i) ; i++ )
   if ( name[i] != name[len-i -1 ] )
     {
        flag = 0;
        break;
     }

 if ( flag == 1 )
    printf ( "Yes it is \n" );
 else
    printf ( "No it is not \n" );
#else

 char *pb = name;
 char *pe = name+len-1; 

 while ( pb < pe ) {
   putchar(*pb);
   putchar(' ');
   putchar(*pe);
   putchar('\n');
   if ( toupper(*pb) == toupper(*pe) ) {
    
    pb++; pe-- ;
   }
    else {
       printf ("string is not palindrome\n");
       exit (0);
    }

 }
       printf ("string is palindrome\n");


#endif
 
}


