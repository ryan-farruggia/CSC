#!/bin/bash

if [[ -f $1 ]]
then 
   echo "$1 is a file "
fi

if [[ -d $2 ]]
then 
   echo "$2 is a folder "
fi

if [[ -x $1 ]]
then 
   echo "$1 is a executable file "
fi


if [[ 4 -eq 4 && 3 -eq 3 ]]
then
 echo " 4 is equal to 4 and 3 is 3 "
fi

if [[ 4 -eq 5 || 3 -eq 3 ]]
then
 echo " 4 is equal to 5 is false  but 3 is 3 "
fi

if [[ ! 4 -eq 5 && 3 -eq 3 ]]
then
 echo " 4 is not equal to 5 but 3 is 3 "
fi

