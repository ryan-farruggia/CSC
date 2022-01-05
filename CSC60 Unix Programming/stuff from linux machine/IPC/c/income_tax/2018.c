#include <stdio.h>
#include <math.h>


int main(void) {

#define TIER_10_TAX 952.00
#define TIER_12_TAX floor(0.12 * ( 38700-9525))
#define TIER_22_TAX floor(0.22 * (82500-38700))
#define TIER_24_TAX floor(0.24 * (157500-82500))
#define TIER_32_TAX floor(0.32 * (200000-157500))
#define TIER_35_TAX floor(0.35 * (500000-200000))
#define TIER_37_TAX 0.37 

 

  int netIncome ;

  float taxes;

  printf ( " Hello- You are Filing Single\n Please enter your taxable income after deductions:");

  scanf ( "%d", &netIncome);
    if ( netIncome <= 9525 ) {
        taxes = 0.1*netIncome ;
          printf ( "1st TIER Total Taxes %.2f \n", taxes );
      }
    else 
    if ( netIncome <= 38700 ) {
       taxes = (netIncome - 9525.0) * 0.12 + TIER_10_TAX ;
         printf ( " 1th TIER: Taxes %.2f +\n", TIER_10_TAX );
         printf ( " 2nd TIER: Taxes %.2f =\n", (netIncome - 9525.0) * 0.12 );
         printf ( " Total : Taxes %.2f \n", taxes );
       } else
    if ( netIncome <= 82500 ) {
         taxes = (netIncome - 38700.0 ) * 0.22 + TIER_12_TAX+ TIER_10_TAX ;
        printf ( " 1th TIER: Taxes %.2f +\n", TIER_10_TAX );
        printf ( " 2nd TIER: Taxes %.2f +\n", TIER_12_TAX );
        printf ( " 3rd TIER: Taxes %.2f =\n", (netIncome - 38700.0 ) * 0.22 );

        printf ( " Total Taxes: %.2f \n", taxes );
    } else
     if ( netIncome <= 157500 ) {
        taxes = (netIncome - 82500.0 ) * 0.24 + TIER_22_TAX + TIER_12_TAX + TIER_10_TAX ;

        printf ( " 1th TIER: Taxes %.2f +\n", TIER_10_TAX );
        printf ( " 2nd TIER: Taxes %.2f +\n", TIER_12_TAX );
        printf ( " 3rd TIER: Taxes %.2f +\n", TIER_22_TAX );
        printf ( " 4th TIER: Taxes %.2f =\n", ((netIncome - 82500.0 ) * 0.24)  );
        printf ( " Total : Taxes %.2f \n", taxes );
  } else
     if ( netIncome <= 200000 ) {
        taxes = (netIncome - 157500.0 ) * 0.32  +
          TIER_24_TAX + TIER_22_TAX + TIER_12_TAX + TIER_10_TAX ;
        printf ( " 1th TIER: Taxes %.2f +\n", TIER_10_TAX );
        printf ( " 2nd TIER: Taxes %.2f +\n", TIER_12_TAX );
        printf ( " 3rd TIER: Taxes %.2f +\n", TIER_22_TAX );
        printf ( " 4th TIER: Taxes %.2f +\n", TIER_24_TAX );
        printf ( " 5th TIER: Taxes %.2f = \n", (netIncome - 157500.0 ) * 0.32 );
        printf ( " Total : Taxes %.2f \n", taxes );
  } else
     if ( netIncome <= 500000 ) {
        taxes = (netIncome - 200000.0 ) * 0.35 + 
          TIER_32_TAX + TIER_24_TAX + TIER_22_TAX + TIER_12_TAX + TIER_10_TAX ;
        printf ( " 1th TIER: Taxes %.2f +\n", TIER_10_TAX );
        printf ( " 2nd TIER: Taxes %.2f +\n", TIER_12_TAX );
        printf ( " 3rd TIER: Taxes %.2f +\n", TIER_22_TAX );
        printf ( " 4th TIER: Taxes %.2f +\n", TIER_24_TAX );
        printf ( " 5th TIER: Taxes %.2f +\n", TIER_32_TAX );
        printf ( " 6th TIER: Taxes %.2f =\n", (netIncome - 200000.0 ) * 0.35);
        printf ( " Total Taxes %.2f \n", taxes );
  }else
      {
        taxes = (netIncome - 500000.0 ) * 0.37 + 
          TIER_35_TAX + TIER_32_TAX +TIER_24_TAX + TIER_22_TAX + TIER_12_TAX + TIER_10_TAX ;
        printf ( " 7th TIER: Taxes %.2f \n", taxes );
  }

 

  

  return 0;

}
