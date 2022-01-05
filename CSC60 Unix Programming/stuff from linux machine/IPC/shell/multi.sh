#!/bin/bash

echo "Please enter a number: "
read number
counter=1
while [ $counter -le 10 ]
do
   echo "$counter x $number = " $((counter * number))
   ((counter++))
done

 
