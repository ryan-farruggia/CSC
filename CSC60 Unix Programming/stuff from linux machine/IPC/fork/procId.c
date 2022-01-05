#include  <stdio.h>
#include  <unistd.h>
#include  <stdlib.h>
void  main( void )
{
          printf("   *** My process is %d ***\n", getpid(  )  );
          printf("   *** myparent process ID %d ***\n", getppid(  )  );

          
          printf("   *** My User ID %d ***\n", getuid(  )  );
          printf("   *** My effective User ID %d ***\n", geteuid(  )  );

          printf("   *** My group ID %d ***\n", getgid(  )  );
          printf("   *** My effective group ID %d ***\n", getegid(  )  );

}

