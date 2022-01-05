void main(void){
    pid_t pid;
    int status;
    pid = fork(); // create a new child
    if (pid == 0){ // child process
        execl("./myscript.sh", "myscript.sh", (char *)NULL);
    }
}