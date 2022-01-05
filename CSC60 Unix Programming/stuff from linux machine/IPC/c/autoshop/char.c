#include <stdio.h>
#include <ctype.h>
int main ( ) 
{
  int t = isdigit ( 'a');
  printf ( " %d \n",  t );

  t = ispunct ( '!');
  printf ( " %d \n",  t );

}
