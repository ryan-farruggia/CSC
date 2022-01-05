#single quote, double quotes,  open quote, back quote

echo "Welcome to my first shell programming "
fname="Samuel"
lname="Jackson"
name="$fname $lname"
echo "My name is: " $name


#### HOW TO EXECUTE SHELL COMMANDS
echo $(ls)
current_date=$(date)
echo $current_date

height=5*12+7
echo "my height is " $height


myAge=25
echo "version1 - My current age is $myAge"
echo "version2 - My current age is " $myAge


#   $# is number of arguments passed
## PRINT PID NUMBER
echo "The process ID is " $$



if [[ $# -eq 0 ]]
   then
   echo "Correct no of arguments supplied"
   else
   echo "Incorrect no of arguments supplied"
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


if [[ $myAge -lt $yourAge && $myAge -gt 20 ]]
   then
       echo "my age is less than Your Age and my age is greater than 20"
  else
   echo "my age is not less than Your Age and my age is greater than 20 "
fi

if [[ -f $1 ]]
then
   echo "$1 is a file "
fi

if [[ -d $2 ]]
then
   echo "$2 is a folder "
fi

if [[ -x $1 ]]
then
   echo "$1 is a executable file "
fi


if [[ 4 -eq 4 && 3 -eq 3 ]]
then
 echo " 4 is equal to 4 and 3 is 3 "
fi

if [[ 4 -eq 5 || 3 -eq 3 ]]
then
 echo " 4 is equal to 5 is false  but 3 is 3 "
fi

if [[ ! 4 -eq 5 && 3 -eq 3 ]]
then
 echo " 4 is not equal to 5 but 3 is 3 "

myPWD=$(pwd)
echo "$myPWD is my current working directory "

# if you don't want to execute the command,  put within single quotes
myPWD='$(PWD)'
echo "within single quotes : $myPWD is my current working directory "

mylsMinusF=`ls -lF /gaia/class/student/srivatss/`
echo "output of ls -lF $mylsMinusF is my current working directory "

if [[ "Computer" = "Computer" ]]
  then
      echo "words are same"
  else
      echo "words are not same"
fi


#########

# run this command with arguments 
echo "The number of arguments passed is $#"
echo "The name of the program $0"
echo "The first argument $1"
echo "The second  argument $2"
echo "The third  argument $3"
echo "The fourth  argument $4"

##########
i=0
while [[ $i -le 5 ]]
 do
  echo $i
  i=$(( i + 1 ))
 done


##########
for (( i = 0; i < 5 ; i++ ))
 do
  if [[ $i -eq 3 ]]
  then
    break;
  else
    echo "i is $i "
  fi
 done


############
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
        echo "$fileName is a folder "
     fi
    done
###############

