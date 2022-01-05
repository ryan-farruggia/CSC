#!/bin/bash

pdw

if [[ $? == 0 ]]
  then
    echo "Command successfully executed "
  else
    echo "Contact System admin"
fi


exit
number=$RANDOM
fileName=BatchProcess$number
echo "My filename is $fileName"
#touch $fileName


name="Sam"
myName='My name is $name'  #  keep my $ as is
echo $myName

exit

x=1
#while [[ $x -lt 10 ]]
# do
#  echo "x value is $x"
#  x=$(( x + 1 ))
# done

for myFile in `ls` 
 do
    if [ -f $myFile ]
      then
         touch $myFile
    fi
    if [[ -d $myFile ]] 
      then 
       echo " I am going to remove you $myFile"
       rmdir $myFile
      fi
 done

exit;

password="/etc/passwd"
if [ -w $password ]
then
   echo "Yes I do have write permission to $password "
else
   echo "NO I do NOT have write permission to $password "
fi

if [ -r $password ]
then
   echo "Yes I do have read permission to $password "
else
   echo "NO I do NOT have read permission to $password "
fi
