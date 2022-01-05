#!/bin/bash
operations='+ - \* / quit'

PS3="Select an operator "
select operator in $operations 
do
  if [[ $operator = 'quit' ]]
    then
      exit  0 
    elif [[ $operator = "\*" ]]
     then
      echo "user selected multiply "
      x=$(( 5 + 3 ))
      echo "x is " $x
   fi


done
