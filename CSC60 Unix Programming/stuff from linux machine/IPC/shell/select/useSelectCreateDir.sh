#!/bin/bash
directories='A B C quit'
HOME="/gaia/class/student/srivatss/IPC/shell/AA"

PS3="Select an directory "
select directory in $directories 
do
  echo "user selected option $directory"
  if [[ $directory != 'quit' ]]
    then
     fullpath="$HOME/$directory" 
     newdirectory="$fullpath/1"
     echo " checking if :$newdirectory :  exists or not"
     if [[ ! -d newdirectory  ]] 
      then
         mkdir  "$fullpath/1"
     fi
   else
     exit 
   fi
  echo $operation
done
