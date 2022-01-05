#!/bin/bash
echo " I will be printing the multiplication table"
echo " Please enter a number"
read num

x=1

while [ $x -lt 6 ] 
 do
   value=$(( x*10 ))
   echo " $x x 10 =" $value
   x=$(( x+1 ))
 done


