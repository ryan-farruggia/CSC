#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>

int main() {

      char    buf[1024], *cwd;
      int     size= 1024;

      if (chdir("/home/college/srivatsa/IPC/") < 0)
          perror("chdir to failed");

      if (getcwd(buf, size) == NULL)
          perror("getcwd failed");
      printf("current working directory is  = %s\n", buf);

      cwd =  get_current_dir_name(  ) ;
      printf(" get_current_dir_name () = %s\n", cwd);
      free  ( cwd);

    return 0;
}

/*  Why after exiting the program,  the chdir is not /home/staff/sankar/sysprog/sysprog */
