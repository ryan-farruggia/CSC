#!/bin/bash

firstname="Johnny"
lastname="Cash"
age=20

name="$firstname $lastname"
name='$name'

echo " My name is " $name " and "
nextYear=$(( age + 1 ))
echo " My age is "  $age " and I will be $nextYear next year"


if [[ $age -ge 20 ]] 
then 
 echo " I am a major ..."
else
 echo " I am still a minor ..."
fi

while [[ $age -lt 40 ]]
do
  echo " my age this year is $age "
  age=$(( age + 1 ))
done
# age is now 39

x=0

for (( x=0; x < age; x++ ))
do
  echo "my age using for loops is $x "
done


