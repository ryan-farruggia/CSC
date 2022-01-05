#!/bin/bash
# GNU bash, version 4.3.46
read -p "Enter a string" 
echo $REPLY
echo $1  
echo $2 
myAge=25
height=5*12+7
yourAge=26

echo "I have another $((100-myAge)) years left to be rich"

echo "my height is " $height
echo "version1 - My current age is $myAge"
echo "version2 - My current age is " $myAge

name="sam donald"
myNameAndAge="My name is $name and my age is $myAge"

echo $myNameAndAge
 

if [ $# -eq 0 ] 
   then 
   echo "Correct no of arguments supplied"
   else
   echo "Incorrect no of arguments supplied"
fi

if [[ $# -eq 0 ]] 
   then 
   echo "Correct no of arguments supplied"
   else
   echo "Incorrect no of arguments supplied"
fi

if [[ "Computer" = "Computer" ]]
  then
      echo "words are same"
  else
      echo "words are not same"
fi

if [[ $myAge -gt $yourAge ]] 
   then 
       echo "my age is greater than Your Age"
  else
   echo "my age is not greater than Your Age"
fi


if [[ $myAge -lt $yourAge ]] 
   then 
       echo "my age is less than Your Age"
  else
   echo "my age is not less Your Age"
fi

 

#logical evaluation,  you need $ before variables
#logical evaluation is different from logical expression

if [[ $myAge -lt $yourAge && $myAge -gt 20 ]] 
   then 
       echo "my age is less than Your Age and my age is greater than 20"
  else
   echo "my age is not less than Your Age and my age is greater than 20 " 
fi

#### PAY ATTENTION WHEN ASSIGNING LOGICAL EXPRESSION TO A VALUE
#### YOU NEED $
expValue=$(( myAge < yourAge && myAge > 20 ))
echo "Logical expression value is " $expValue


#### YOU DON'T NEED $ SYMBOLS IN ARITHMETIC EXPRESSIONS
if (( myAge < yourAge && myAge > 20 )) 
then 
  echo "Using Logical eval: my age is less than Your Age and my age is greater than 20"
else
  echo "Using Logical eval: my age is not less than Your Age and my age is greater than 20 " 
fi

 

## PRINT PID NUMBER

echo "The process ID is " $$
if test -f "$0" 
 then 
   echo "The shell script file name is " $0
fi
 

if [ -x $0 ]
  then
     echo " The shell script file is " $0 
      else
     echo " else The shell script file is " $0 
fi

 

#### HOW TO EXECUTE SHELL COMMANDS
echo $(ls)
current_date=$(date)
echo $current_date
 

myPWD=$(pwd)
echo "$myPWD is my current working directory " 

# if you don't want to execute the command,  put within single quotes
myPWD='$(PWD)'
echo "within single quotes : $myPWD is my current working directory " 

mylsMinusF=`ls -lF /gaia/class/student/srivatss/`
echo "output of ls -lF $mylsMinusF is my current working directory " 

