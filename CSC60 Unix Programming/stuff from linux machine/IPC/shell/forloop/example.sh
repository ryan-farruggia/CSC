#!/bin/bash
# C style syntax 
i=0

for (( i = 0; i < 5 ; i++ ))
 do
 if [[ $i -eq 3 ]]
  then
    break;
  else
    echo "i is $i "
  fi
 done
