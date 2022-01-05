#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/file.h>
#include <sys/mman.h>
#include <sys/wait.h>

// How to compile
// gcc unlink.c -o unlink -lrt 
// gcc writer.c -o writer -lrt 
// gcc read.c -o read -lrt 

void error_and_die(const char *msg) {
  perror(msg);
  exit(EXIT_FAILURE);
}
 
int main(int argc, char *argv[]) {
  int r;
 
  char memname[20 ]   ;

  if ( argc == 2 ) {
  strcpy ( memname , argv[ 1 ]) ;
  }
  else
   {
    perror ( "incorrect arguments\n");
    exit ( 1 ) ;
   }
  const size_t region_size = sysconf(_SC_PAGE_SIZE);
  printf ( "size of the page %d \n", region_size);

/*
  int shm_open(const char *name, int oflag, mode_t mode);

  A  POSIX  shared  memory object is in effect a handle which can be used by unrelated processes to mmap(2) the same region  of shared  memory.
*/
 
  int fd = shm_open(memname, O_CREAT | O_RDWR, 0666); // only a name  
  if (fd == -1)
    error_and_die("shm_open");
 
//   int ftruncate(int fd, off_t length);
//

  r = ftruncate(fd, region_size);  // allocate size for that.
  if (r != 0)
    error_and_die("ftruncate");

/*
       void *mmap(void *addr, size_t length, int prot, int flags,
                  int fd, off_t offset);
*/

  void *ptr = mmap(0, region_size, PROT_READ | PROT_WRITE, MAP_SHARED, fd, 0);
  if (ptr == MAP_FAILED)
    error_and_die("mmap");
  close(fd);

    //char *d = (char *) ptr;
    strcpy ( (char *)ptr+region_size, "Hello summer2021");  
 
//       int munmap(void *addr, size_t length);

  r = munmap(ptr, region_size);
  if (r != 0)
    error_and_die("munmap");
 
  return 0;
}
