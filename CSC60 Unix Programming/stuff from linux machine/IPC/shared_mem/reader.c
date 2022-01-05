#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/file.h>
#include <sys/mman.h>
#include <sys/wait.h>
 
void error_and_die(const char *msg) {
  perror(msg);
  exit(EXIT_FAILURE);
}
 
int main(int argc, char *argv[]) {
  int r;
 
  char memname[20] ;
  strcpy ( memname, argv[1] ) ;

 
  const size_t region_size = sysconf(_SC_PAGE_SIZE);
 
  int fd = shm_open(memname, O_RDWR, 0666);
  if (fd == -1)
    error_and_die("shm_open");
 
  r = ftruncate(fd, region_size);
  if (r != 0)
    error_and_die("ftruncate");
 
  void *ptr = mmap(0, region_size, PROT_READ | PROT_WRITE, MAP_SHARED, fd, 0);
  if (ptr == MAP_FAILED)
    error_and_die("mmap");
  close(fd);
 
   printf("reader reading from shared memory: %s\n", (char  *) ptr);
 
  r = munmap(ptr, region_size);
  if (r != 0)
    error_and_die("munmap");
 
  return 0;
}
