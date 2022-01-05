
void getMeTheNumber ( int *count ) 
{
  FILE * fp = fopen ( "NameCommissions.txt", "r");
  if ( fp == NULL  ) {
    printf ( " Unable to open the file \n");
    exit ( 1 );
  }
  char temp[16];
  int percent = 0 ;

  while ( 1 ) {
    if ( fscanf ( fp, "%s%d", temp, &percent ) != EOF )  {
      printf ( "%s %d %d \n", temp, percent, *count ) ;
      *count = *count + 1;
    }
    else
      break;
  }
 
}




