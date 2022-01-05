#!/bin/bash
echo " Welcome to my calculator" 
echo "Please enter the first operand "
read oper1

echo "Please enter the second operand "
read oper2

echo "Please enter the operator "
read oper

# You can also do
#read oper1 oper oper2


if [ "$oper" == "+"  ] 
  then
   value=$(( oper1 + oper2 ))
   echo "$oper1 $oper $oper2 =" $value
  elif  [ "$oper" == "-"  ] 
  then
   value=$(( oper1 - oper2 ))
   echo "$oper1 $oper $oper2 =" $value
  elif  [ "$oper" == "*"  ] 
  then
   value=$(( oper1 * oper2 ))
   echo "$oper1 $oper $oper2 =" $value
  elif  [ "$oper" == "/"  ] 
  then
   value=$(( oper1 / oper2 ))
   echo "$oper1 $oper $oper2 =" $value
  fi
