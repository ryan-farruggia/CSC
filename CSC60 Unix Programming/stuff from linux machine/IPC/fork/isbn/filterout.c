void filterOut ( char *Number  )
{
           int i = 0, sum = 0, wt = 10;
           for ( i = 0 ; i < strlen ( Number)-1; i++ ) {
              sum=sum+  (Number[i]-48)*wt;
              wt--;
           }
           sum = sum%11;
           sum = 11-sum;
           if ( sum == Number[9]-48)
              {
                 printf ("Valid number \n" );
              }
           else
              {
                 printf ("InValid number \n" );
              }
}

