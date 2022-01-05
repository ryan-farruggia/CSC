#include <stdio.h>
void guess ( unsigned char low, unsigned char high) 
{
    printf ( "Is it greater than %d?\n", (low+high) / 2 ) ;
    printf ( "Enter y if yes, and n for no ?\n", (low+high) / 2 ) ;
    printf ( "Enter s for same number ?\n", (low+high) / 2 ) ;
    
    char ch = getchar ( ) ; 
    getchar ( ) ;
    if  ( ch == 'y') {
      guess ( (low+high)/2, high); 
    }
    else
    if  ( ch == 'n') 
      guess ( low, (low+high)/2); 
    else
    if  ( ch == 's') 
       printf ( "Thank you\n");
   

}

int main ( ) 
{
  unsigned char num, myguess=1;
  printf ( "Think of a number from 1 to 128 \n");
  guess ( 1, 128);
}


  
   

  
