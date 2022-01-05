#!/bin/bash
i=0
while [[ $i -le 5 ]]
 do
  echo $i
  i=$(( i + 1 ))
 done

echo "doing the same thing with until.... "
i=0
until [[ $i -gt 5 ]]
 do
  echo $i
  i=$(( i + 1 ))
 done
