#!/bin/bash
fruits='Orange Banana Apple Grape Quit'

PS3="Select a Fruit "
select fruit in $fruits
do
  if [[ $fruit != 'Quit' ]]
    then
      echo "user selected $fruit"
    else
      echo "Good Bye"
      exit
   fi
done

