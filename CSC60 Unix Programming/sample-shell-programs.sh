#!/bin/bash

# GNU bash, version 4.3.46


read -p "How old are you ", age
if (( age < 65 ))
then
         echo "Wow in $((65-age)) years, you will retire"
else
         echo "Thank you for serving your family"
fi


# status of last command
if [[ $? = "0" ]]
  then
   echo "command returned zero"
  else
   echo "command returned non-zero"

fi





#### seq and for loop ,  seq start step end
     for i in `seq 1 5 50` ; do
        echo "The number is " $i
     done

     for i in `seq 1 4` ; do
        echo "The number is " $i
     done

#example
     start=10
     end=20
     steps=4

     for i in `seq $start $steps $end` ; do
        echo "The number is " $i
     done

fileList=`ls /`
#echo $fileList
    for fileName in $fileList
    do
     if [ "-d $fileName" ] ; then
        echo "$fileName is a directory"
     #echo $fileName
     elif [ "-f $fileName" ] ; then
        echo "$fileName is a file"
     fi


       if [ "-r $fileName" ] ; then
         echo "I have read permissions in $fileName"
       fi

       if [ "-w $fileName" ] ; then
          echo "I have write permissions in $fileName"
       fi

       if [ "-x $fileName" ] ; then
          echo "I have exec permissions in $fileName"
       fi

    done







### integer comparisons -gt, -ge, -le, -lt, -eq
i=5

until [[ $i -gt 10 ]]
  do
     echo "until do : i=" $i
     i=$(( i + 1 ))
  done

while [[ $tmp1 -lt 5 ]]
  do
   tmp1=`date | cut -d' ' -f5 | cut -d: -f3`
   echo $tmp1
   tmp1=$((10#$tmp1))
done

## string comparison =, <, <=, >, >=
name="college"
if  [[  $name == "college"  ]]
then
    echo "same strings"
else
    echo "not same strings"
fi


### print a random number
number=$RANDOM
echo "Randon number is $number "

# Days in a month using [[ ]]  and ||
echo "Enter the first 3 letters of the month[Jan, Mar, Sep ...]"
read month
echo $month
echo "$month" | tr '[:upper:]' '[:lower:]'
# This is the start of branch
if [[ "$month" == "jan" || "$month" == "mar" || "$month" == "may" || "$month" == "jul" || "$month" == "aug" || "$month" == "oct" || "$month" == "dec" ]]
then
echo " You have 31 days in $month"
elif [ "$month" == "feb" ]
then
echo " You have 28 days in $month"
elif [[ "$month" == "apr" || "$month" == "jun" || "$month" == "sep" || "$month" == "nov" ]]
then
echo " You have 30 days in $month"
else
echo "Invalid month"
fi

#same problem with single [ ]  and -o

if [ "$month" == "jan" -o "$month" == "mar" -o "$month" == "may" -o "$month" == "jul" -o "$month" == "aug" -o "$month" == "oct" -o "$month" == "dec" ]
then
echo " You have 31 days in $month"
elif [ "$month" == "feb" ]
then
echo " You have 28 days in $month"
elif [ "$month" == "apr" -o "$month" == "jun" -o "$month" == "sep" -o "$month" == "nov" ]
then
echo " You have 30 days in $month"
else
echo "Invalid month"
fi
