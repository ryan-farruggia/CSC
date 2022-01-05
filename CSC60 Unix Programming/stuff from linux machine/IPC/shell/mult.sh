#!/bin/bash

echo "I will be printing the multiplication table!"

echo "Type a number: "

read num

for ((x=1; x<=$num; x++))
 do
   answer=$((x * num))
   echo "$x x $num = $answer"
 done


