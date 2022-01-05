int main(){
    unsigned char cells;
    unsigned char j;
    unsigned char data[] = {9,8,7,5,3,2,1};
    // objective: print the address of each cell in the array
    cells = sizeof (data) / sizeof(data[0]);
    for (j = 0; j < cells; j++) {
        printf("Value at cell %d is %d \n", j, *(data+j));
    } return 0;
}