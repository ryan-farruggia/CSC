#!/bin/bash

# run this command ./args.sh 2 3 4 5
echo "The number of arguments passed is $#"
echo "The name of the program $0"
echo "The first argument $1"
echo "The second  argument $2"
echo "The third  argument $3"
echo "The fourth  argument $4"

for x in "$@"
 do 
  echo $x
 done




