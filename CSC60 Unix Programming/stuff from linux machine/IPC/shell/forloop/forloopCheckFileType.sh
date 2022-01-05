#!/bin/bash
# This will store the output of ls in fileList variable
# for every value in the variable,  it will check if it is a file

#example 1 uses string 
fruits="orange apple banana grapes"
for fruit in $fruits
 do
  echo "my favorite fruit" $fruit
 done


#example 2 expansion of a command within ` ` 
# uses -f -d option

fileList=`ls`
#echo $fileList
    for fileName in $fileList
    do
     if [[ -f $fileName ]]  
      then
        echo "$fileName is a file"
     elif [[ -d $fileName ]] 
       then
        echo "$fileName is a folder , good targer to rename"
        echo "I am removing the folder $fileName "
     fi
    done
