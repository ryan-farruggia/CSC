#!/bin/bash

out=`cat ~/listing.txt | grep ^- | tr -s ' ' | cut -d' ' -f5`

#counts the number of sizes of files only in the listing.txt
sum=0

for n in $out 
do
 sum=$((sum + n ))
done



echo $sum
