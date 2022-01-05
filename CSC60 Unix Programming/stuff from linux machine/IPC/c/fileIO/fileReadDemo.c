#include <stdio.h>
int main  ( )
{
   
  char ch;

  int num;
  FILE *fr ;

  fr = fopen ( "/gaia/class/student/srivatss/pangram.in", "r");

  num = fscanf ( fr, "%c" , &ch ) ;

  while ( num != EOF  ) {
     if ( ch != 10 )
      printf ( "letter=%c ASCII=%d \n" , ch , ch) ;
     else {
      printf ( "NEW LINE REACHED\n" ) ;
      // ADD LOGIC FOR PANGRAM FROM PREVIOUS ASSIGNMENTS
    }

     num = fscanf ( fr, "%c" , &ch ) ;
  }

 fclose ( fr );

}


  
