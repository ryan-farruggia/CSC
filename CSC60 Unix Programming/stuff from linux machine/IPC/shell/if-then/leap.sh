#!/bin/bash
year=$1

rem4=year%4
rem100=year%100
rem400=year%400

if [[ $rem4 -gt 0 ]]
then
   echo "Not a leap year "
   exit 0
else

if [[ $rem100 -gt 0 ]]
then
   echo "Leap Year"
else
  if [[ $rem400 -eq 0  ]]
   then
   echo "Leap Year"
   exit 0
   else
   echo "Not Leap Year"
  fi
   
fi
     
fi
