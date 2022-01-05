#!/bin/bash


count=0
myfiles=`find . -type f`
for  file in $myfiles 
do
  if [[ -f $file ]] 
   then 
     #echo $file
     temp=`stat -c %s $file`
     count=$((count + temp ))
   fi
done
echo "total size of all files in my account $count"

count=0

myfiles=`find . -type f -size +900k`
for  file in $myfiles 
do
  if [[ -f $file ]] 
   then 
     count=$((count + 1 ))
   fi
done
echo "number of file that are more than 900k are: " $count


mydirs="fall summer spring"
for dir in $mydirs
 do 
 cd $dir
 echo $dir
 myfiles=`ls`
 for file in $myfiles
  do
    if [[ -f $file && $file == *.c ]]
    #if [[ -f $file  ]]
     then
        gcc $file
    fi
  done
  cd ..
done
        

 
