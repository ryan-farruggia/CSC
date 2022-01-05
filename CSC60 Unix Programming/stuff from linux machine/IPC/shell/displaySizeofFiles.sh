
files=`ls -l | tr -s ' ' | cut -d' ' -f5`
sum=0

for file in $files
    do
    sum=$(( sum + file ))
done

echo "Sum:" $sum
