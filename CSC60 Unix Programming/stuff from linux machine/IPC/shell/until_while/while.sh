#!/bin/bash
average=0
count=0
sum=0

while [[ $count -lt 5 ]] 
 do
   read -p "enter a number" value
   sum=$(( value + sum ))
   count=$(( count + 1 ))
 done

average=$(( sum / 5 ))
echo "The sum is $sum"
echo "The average is $sum/5 = $average"
