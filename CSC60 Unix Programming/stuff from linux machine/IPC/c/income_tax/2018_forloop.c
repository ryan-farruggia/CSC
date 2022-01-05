#include <stdio.h>
#include <math.h>


int main(void) {


float taxTierArray2018 [7][2] =
{ 
{ .10, 9525.00 },
{ .12, 38700.00 },
{ .22, 82500.00 },
{ .24, 1005000 },
{ .32, 204100.00 },
{ .35, 510300.00 },
{ .37, 1000000.00 } // just made a million as upper case 
} ;

  int income , i, j;

  float taxes;

  printf ( " Hello- You are Filing Single\n Please enter your taxable income after deductions:");

  scanf ( "%d", &income);

  for (  i = 0; i < 7 ; i++ ) 
    if ( taxTierArray2018[i][1] > income ) 
      break;

  if ( i == 0 )
     taxes = income*taxTierArray2018[0][0] ;
  else {
     taxes = taxTierArray2018[0][0] * taxTierArray2018[0][1] ;

     for ( j = 1 ; j < i; j++ ) 
        taxes =  taxes + 
             ( taxTierArray2018[j][1]-taxTierArray2018[j-1][1]) *
               taxTierArray2018[j][0] ;

      taxes = taxes +  (income - taxTierArray2018[j-1][1]) * 
                       taxTierArray2018[j][0]  ;   
 
 
   }
       
  printf ( "income are %d\n", income);
  printf ( "Taxes are %.2f \n", taxes);
  return 0;
}
