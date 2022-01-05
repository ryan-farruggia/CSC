#./mail_with_attachment.sh "your subject" quiz.txt sankarsrivatsa@gmail.com
# THIS WORKS 

#!/bin/bash
if [[ $# == 3 ]]
then
   echo "Please open the attachment" | mail -s "$1" -a $2 $3
else
   echo "Incorrect Usage..."
   exit 1 
fi
