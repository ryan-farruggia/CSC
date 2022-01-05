
#!/bin/bash
if [ $# = 3 ]
then
   echo "$3" | mail -s "$1" $2
else
   echo "Incorrect Usage..."
   exit 1 
fi
