#!/bin/bash

date

read -p "Enter your last name" name
echo "You entered your last name as: " $name

read -p "How old are you? " age
if [[ $age < 65 ]]
then
	echo "Wow in $((65-age)) years, you will retire"
else
	echo "Thank you for your service."
fi
