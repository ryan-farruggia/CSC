#include <stdio.h>
#include <string.h>
#include <assert.h>

struct _name_percent  {
  char name[16];
  int percent;
};


struct _prices {
  char name[16];
  float r, b, a, o;
};

struct _jobs {
  char name[16];
  int r, b, a, o;
} ;



void commissionOfAMechanic   (struct _name_percent *np)
{
  FILE *fp = fopen ( "NameCommissions.txt", "r");
  assert ( fp != NULL );
  char temp[16];
  int commission;
   
  int i ;
  for ( i = 0 ; i < 4 ; i++ ) { 
      fscanf (fp,  "%s%d", temp, &commission);
      if (strcmp ( temp, np->name) == 0 )  {
         break;
      }
  }

  assert ( i != 4 ) ;
  np->percent = commission;
  strcpy(np->name, temp);
  fclose ( fp);
  printf ( "The name given is %s  and his commission is=%d \n", np->name, np->percent ) ;
}

void priceOfAllServices (struct _prices *pr  )
{
  FILE *fp = fopen ( "PriceOfServices.txt", "r");

  assert ( fp != NULL );
  char temp[16];

  fscanf (fp,  "%s%f", temp, &(pr->r) ) ;
  printf ( "ServiceName=%s Price=%0.2f\n", temp, pr->r);
  fscanf (fp,  "%s%f", temp, &(pr->b) ) ;
  printf ( "ServiceName=%s Price=%0.2f\n", temp, pr->b);
  fscanf (fp,  "%s%f", temp, &(pr->a) ) ;
  printf ( "ServiceName=%s Price=%0.2f\n", temp, pr->a);
  fscanf (fp,  "%s%f", temp, &(pr->o ) );
  printf ( "ServiceName=%s Price=%0.2f\n", temp, pr->o);
 
  fclose ( fp);

}

void getWeeklyStatsOfaMechanic( struct _jobs *jobs )
{
  FILE *fp = fopen ("JobsDone.txt", "r");
  assert ( fp != NULL );

  char temp[16];
  
  int i ;
  for ( i = 0 ; i < 4 ; i++ ) { 
      fscanf (fp,  "%s%d%d%d%d", temp, &(jobs->r), &(jobs->b),&(jobs->a),&(jobs->o));
      if (strcmp ( temp, jobs->name ) == 0 )  {
         break;
      }
  }

  assert ( i != 4 );

  printf ( "jobs done by %s %d %d %d %d \n", temp, jobs->r,jobs->b,jobs->a,jobs->o);
   fclose ( fp);

}

int main ( )
{
 struct _name_percent  np;
 struct _prices prices;
 struct _jobs jobs;

 int percent;
 char name[16];

 printf ("Please enter the name of the Mechanic \n" );
 scanf ( "%s", &name);

 strcpy ( np.name, name);
 strcpy ( jobs.name, name);

 commissionOfAMechanic   ( &np ); 

 priceOfAllServices ( &prices  ) ;

 getWeeklyStatsOfaMechanic( &jobs ) ;

 float total= (jobs.r*prices.r  + jobs.b*prices.b + jobs.a*prices.a +
     jobs.o*prices.o )*np.percent/100;

 printf ( "Name=%s Total Commission=%.2f\n",name ,total);
  
}

