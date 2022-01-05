#include <stdio.h>

#define PLUS '+'
#define MINUS '-'
#define TIMES '*'
#define OVER '/'

int main ( )
{
  unsigned char plusFlag=0, minusFlag=0, timesFlag=0, overFlag=0;
  int operand1, operand2;
  char operator;


  while ( !(  plusFlag && minusFlag && timesFlag && overFlag )  )
  {
    
    if ( operator == PLUS )  // SEE HOW CONTANTS ARE DEFINED
     {
            plusFlag=1;
     }
     else if (operator == MINUS ) 
     {
            minusFlag=1;
     }
     else if (operator == TIMES ) 
     {
            timesFlag=1;
     }
     else if (operator == OVER ) 
     {
            overFlag=1;
     }
  }
}
