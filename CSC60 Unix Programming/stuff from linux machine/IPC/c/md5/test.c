#include <stdio.h>

#define max(a, b) \
   if  ( (a) > (b) ) printf ("a"); \
   else \
   printf ("a"); 

int main ( )
{
   max ( 5, 4);
   max ( 6, 4);
   max ( 7, 4);
   max ( 8, 4);
   max ( 9, 4);
}
