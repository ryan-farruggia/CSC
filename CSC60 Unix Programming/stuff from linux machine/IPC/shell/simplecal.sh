#!/bin/bash

echo "Please enter the first operand"
read firstNum
echo "Please enter the second operand"
read secondNum
echo "Please enter the operator"
read operand

if [ "$operand" == "+" ]
then 
echo "$firstNum $operand $secondNum = " $((firstNum + secondNum))
fi

if [ "$operand" == "-" ]
then
echo "$firstNum $operand $secondNum = " $((firstNum - secondNum))
fi

if [ "$operand" == "*" ]
then
echo "$firstNum $operand $secondNum = " $((firstNum * secondNum))
fi

if [ "$operand" == "/" ]
then
echo "$firstNum $operand $secondNum =" $((firstNum / secondNum))
fi


