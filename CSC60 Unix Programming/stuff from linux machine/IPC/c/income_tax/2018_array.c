#include <stdio.h>
#include <math.h>


int main(void) {


float taxTierArray2018 [7][2] =
{ 
{ .10, 9525 },
{ .12, 39475 },
{ .22, 84200 },
{ .24, 160725 },
{ .32, 204100 },
{ .35, 510300 },
{ .37, 1000000 } // just made a million as upper case 
} ;

  int income ;

  float taxes;

  printf ( " Hello- You are Filing Single\n Please enter your taxable income after deductions:");

  scanf ( "%d", &income);

  return 0;
}
