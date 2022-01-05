#include <stdio.h>



static unsigned char count = 31;

void callMe ( char ch )
{
   

  if ( ch == 'U' || ch == 'u') {
    
    if ( count > 15 )  
      count -= 16;
      printf ( "count = %d \n", count ) ;
      return;
    }

  if ( ch == 'A' || ch == 'a') {
    if (  count % 2 == 1) 
    count -= 1;
    printf ( "count = %d \n", count ) ;
    return;
  }

  if ( ch == 'o' || ch == 'O') {
    if ( (count / 8 == 3) || (count / 8 == 1)  )
      count -= 8;
      printf ( "count = %d \n", count ) ;
    return;
  }

    if ( ch == 'i' || ch == 'I') {
    if ( (count / 4 == 7) || (count / 4 == 5)  
      || (count / 4 == 3) || (count / 4 == 1 ) )
      count -= 4;
      printf ( "count = %d \n", count ) ;
    return;
  }

    if ( ch == 'e' || ch == 'E') {
    if ( (count / 2  == 15 ) || (count / 2 == 13 )  
      || (count / 2 == 11 ) || (count/2  == 9 ) 
      || (count/2 == 7 ) || (count/2  == 5 ) || ( count/2 == 3 || ( count/2 == 1 ))
      )
      count -= 2;
      printf ( "count = %d \n", count ) ;
    return;
  }

    
  
}
int main(void) {
   printf ( "Please enter a string of character\n");
   char ch = getchar ( ) ;
     while ( ch != '\n') { callMe (ch); ch = getchar() ;}

     if (count ) {
       printf ( "Some letters are missing \n");
       printf ( " %d \n", count );
     }

  return 0;
}
