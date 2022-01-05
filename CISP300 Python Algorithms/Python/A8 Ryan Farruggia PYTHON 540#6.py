#------------------------------------------------------------------
# Name:         Ryan Farruggia
# Date:         07-27-20
# Reference:    page # 540 problem # 6
# Title:        Golf Scores
# Inputs:       Name of golfers and their golfing score
# Process:      If .dat file exists, read information / If .dat != exist, write information to a new .dat file
# Outputs:      Display requested/entered information depending on if .dat file exists
#------------------------------------------------------------------

# Declare list_scores array as global
list_scores = []
def main():
    # Set case if file does not exist, write file instead of read
    try:
        file_obj = open('golf.dat', 'a')
    except FileNotFoundError:
        file_obj = open('golf.dat', 'w')
    name = input('Enter the name of a player or "y" to display current records: ')
    # Begin while loop
    while name != 'y' and name != 'Y':
        score = int(input('Enter ' + name + '\'s score: '))
        file_obj.write(name + '\n')
        file_obj.write(str(score) + '\n')
        print(name + '\'s score saved successfully.')
        name = input('Enter the name of a player or "y" if you are finished: ')
    # Set case if file exists, read file instead of write
    file_obj = open('golf.dat', 'r')
    name = file_obj.readline().rstrip('\n')
    print('-------------------------------')
    # Begin while loop
    while name == 'y' or name == 'Y' or name != '':
        score = file_obj.readline()
        print(name + ': ' + score)
        name = file_obj.readline().rstrip('\n')
# Define bubble sorting algorithm to replace built-in min() function
def bubbleSort(scores):
    swap = True
    while swap:
        swap = False
        for i in range(len(scores) - 1):
            if scores[i] > scores[i + 1]:
                scores[i], scores[i + 1] = scores[i + 1], scores[i]
                swap = True
# Define a function to find the list of scores in golf.dat if file exists; bubbleSort() once found
def getList():
    file_obj = open('golf.dat', 'r')
    content = file_obj.readlines()
# If line contains a digit, append that int to the array for sorting
    for line in content:
        for k in line:
            if k.isdigit() == True:
                list_scores.append(k)
    bubbleSort(list_scores)
# Final function for displaying and separating information during output
def postList():
    if list_scores:
        print('--------------------------------')
        print('The best score is currently: ', list_scores[0])
        print('--------------------------------')
    else:
        print('No data to display.')
        print('--------------------------------')

main()
getList()
postList()