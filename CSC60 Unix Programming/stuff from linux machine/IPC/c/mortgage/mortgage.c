
#include <stdio.h>
#include <math.h>
int main ( )
{
  float remaining_loan_amount = 0;
  float interest = 0;
  int year=0;

  printf ( "Enter the loan Amount \n" );
  scanf ("%f", &remaining_loan_amount);
  printf ( "Enter the annual interest \n" );
  scanf ("%f", &interest);
  printf ( "Enter the number of year \n" );
  scanf ("%d", &year);

  float months = year*12;
  interest = interest / ( 12*100);

  float temp = pow (1+interest, months);
  float monthlyPayment = (remaining_loan_amount*interest*temp)/(temp-1) ;


  int i;
  for ( i = 0 ; i < months; i++ ) {
       float monthlyInterest = remaining_loan_amount*interest;
       float monthlyPrincipal=monthlyPayment-monthlyInterest;
       printf ( "monthlyPayment %0.2f, monthlyInterest=%.2f , monthlyPrincipal=%0.2f\n", monthlyPayment,monthlyInterest,monthlyPrincipal);

       remaining_loan_amount -= monthlyPrincipal;

  }
}
