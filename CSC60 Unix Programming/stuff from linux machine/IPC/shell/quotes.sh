#!/bin/bash

# exec the command with `` and subs the output 
fileList=`ls`

echo "The list of files is: " $fileList


# Do not replace the value of the variable with single quotes '' 
City=Sacramento
echo "The name of the city is :" '$Sacramento'


# Do replace the value of the variable within ""  
City=Sacramento
echo "The name of the city is :" "$Sacramento"


