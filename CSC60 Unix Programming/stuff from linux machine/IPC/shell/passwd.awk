cat /etc/passwd | awk -F: ' { print $1 " " $2 " " $3 " " $4 " " $5   } ' | sort 
