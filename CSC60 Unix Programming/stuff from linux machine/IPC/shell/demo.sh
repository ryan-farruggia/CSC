#!/bin/bash
echo "Number of arguments is " $#
echo "the name of the program is " $0
echo "first argument is " $1
echo "second argument is " $2
echo "third argument is " $3

if [[ -f $1 ]]
 then
   echo "$1 is a file "
 elif [[ -d $1 ]]
  then
   echo "$1 is a folder "
 fi

a=20
b=30
let c=b+a
echo $c
let "d = $c + a "
echo $d
let e=c*2
echo $e
let e=e%6
echo $e

expr 2 + 3 


