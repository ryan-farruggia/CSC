#!/bin/bash
#echo $2 | mutt -s "Your Test Scores from Math Bee" $1

echo $3 | mutt -s "Your Test Scores from Nat Gee Bee" $1 -a $2 

