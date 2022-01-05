#!/bin/sh
declare -i total=0
while [ find . -type f -size +900k ]
do
	total = expr $total + 1
done
echo "$total"
