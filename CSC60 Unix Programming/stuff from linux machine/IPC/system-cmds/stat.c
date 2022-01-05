#include <stdio.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <unistd.h>
#include <dirent.h>

#if 0
 
       struct stat {
       mode_t    st_mode;      /* file type & mode (permissions) */
       ino_t     st_ino;       /* i-node number (serial number) */
       dev_t     st_dev;       /* device number (file system) */
       dev_t     st_rdev;      /* device number for special files */
       nlink_t   st_nlink;     /* number of links */
       uid_t     st_uid;       /* user ID of owner */
       gid_t     st_gid;       /* group ID of owner */
       off_t     st_size;      /* size in bytes, for regular files */
       time_t    st_atime;     /* time of last access */
       time_t    st_mtime;     /* time of last modification */
       time_t    st_ctime;     /* time of last file status change */
       blksize_t st_blksize;   /* best I/O block size */
       blkcnt_t  st_blocks;    /* number of disk blocks allocated */
     };
#endif

int main ( int argc, char *argv[ ])
{
/*
 *       int stat(const char *pathname, struct stat *buf);
 *             int fstat(int fd, struct stat *buf);
 *                    int lstat(const char *pathname, struct stat *buf);
 *
 */

  struct stat recvBuf;

  lstat ( argv[1], &recvBuf );

  if ( S_ISREG (recvBuf.st_mode ) )
      printf ( " %s is regular file\n", argv[1] );

  if ( S_ISDIR (recvBuf.st_mode ) )
      printf ( " %s is directory\n", argv[1] );

  if ( S_TYPEISSHM (&recvBuf ) )
      printf ( " %s is SHM \n", argv[1] );

  if ( S_TYPEISSEM (&recvBuf ) )
      printf ( " %s is SEM \n", argv[1] );

/*
  if ( S_TYPEISSMQ (&recvBuf ) )
      printf ( " %s is SMQ \n", argv[1] );

*/

}



