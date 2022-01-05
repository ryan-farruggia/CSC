#!/bin/bash
# This will store the output of ls in fileList variable
# for every value in the variable,  it will check if it is a file

#example 1 uses string 

myFiles=`find ~/ -type f`
count=0
for aFile in $myFiles 
do
  temp=`ls -l $aFile | tr -s ' ' | cut -d' ' -f5` 
  count=$((count + temp))
  
done
echo "Total size is $count"

