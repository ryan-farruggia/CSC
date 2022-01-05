#include <stdio.h>
#include <string.h>
#include <assert.h>

void commissionOfAMechanic   (char *mechanicName, int *comm)
{
  FILE * fp = fopen ( "NmeCommissions.txt", "r");
  //assert ( fp != NULL );
  if ( fp == NULL  ) {
    printf ( " Unable to open the file \n");
    exit ( 1 );
  }
  char temp[16];
  int commission;
   
  int i ;
  for ( i = 0 ; i < 4 ; i++ ) { 
       // read the name of the mechanic into temp and the comm
       // if the  name matches temp ( use strcmp 
       //     break
  }

  assert ( i != 4 ) ;
  fclose ( fp);
  printf ( "The name given is %s  and his commission is=%d \n", temp, *comm );
}

void priceOfAllServices ( float pr[ ]  )
{
  FILE *fp = fopen ( "PriceOfServices.txt", "r");

  assert ( fp != NULL );
  char temp[16];
  // pr[0] first cell
  // pr[1] second cell
  // pr[2] third cell
  // pr[3] fourth cell

   // ignore the service name, but read the price,  
   //  into the array
 
  fclose ( fp);

}

void getWeeklyStatsOfaMechanic( char *name, int jobs[] )
{
  FILE *fp = fopen ("JobsDone.txt", "r");
  assert ( fp != NULL );

  char temp[16]; // read the name 
  // jobs[0] is the first service
  // jobs[1] is the second service
  
  int i ;
  for ( i = 0 ; i < 4 ; i++ ) { 
       // read the name. make sure it match name
       // read the rest of the 4 numbers if matches
       //     break
       //      fscanf ( fp, "%s%d%d%d%d", name, ....
       //      if (strcmp ( temp, name)
       //
       job[0] = num;
  }

  assert ( i != 4 );

  printf ( "jobs done by %s %d %d %d %d \n", temp, jobs[0],jobs[1],jobs[2],jobs[3]);
   fclose ( fp);

}

int main ( )
{
 int percent;
 char name[16];
 int jobs[4];
 float prices[4];

   printf ("Please enter the name of the Mechanic \n" );
   scanf ( "%s", name);

   commissionOfAMechanic   ( name, &percent); 

   priceOfAllServices ( prices  ) ;

   getWeeklyStatsOfaMechanic( name, jobs ) ;

  float total = jobs[0]*prices[0] +
                jobs[1]*prices[1] +


  // cut the ribbon
 // compute the total commission here 
 float total ;
 printf ( "Name=%s Total Commission=%.2f\n",name ,total);
  
}

