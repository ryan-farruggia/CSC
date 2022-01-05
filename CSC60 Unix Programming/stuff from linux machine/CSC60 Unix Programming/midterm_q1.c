int count = 10;
void main(void){
    pid_t pid;
    int status;
    pid = fork(); // create a new child
    if (pid == 0){
        count++; // increment in child process
    } else {
        wait (pid, &status);
        count--; // decrement in parent process
    }
}