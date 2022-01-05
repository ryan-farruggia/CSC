#------------------------------------------------------------------
# Name:         Ryan Farruggia
# Date:         07-22-20
# Reference:    page # 467 problem # 2
# Title:        Alphabetical Sort (?)
# Inputs:       20 names of people
# Process:      Insertion sort names alphabetically
# Outputs:      Display the 20 names sorted alphabetically in ascending order
#------------------------------------------------------------------

def main():
    # Declare alphabet_list as an array
    alphabet_list = []
    print("Begin entering 20 names:")
    # Begin for loop asking for 20 inputs containing names of people
    for x in range(20):
        alphabet_list.append(str(input()))
    # Call insertion sort with alphabet_list as argument
    insert(alphabet_list)
    print("Names in alphabetical order:\n", "---------------------------------", sep="")
    # Begin for loop displaying all sorted (alphabetical) data after insertion sort has finished
    for x in range(len(alphabet_list)):
        print(alphabet_list[x])
    print("---------------------------------")

# Define insertion sorting module
def insert(alphabet_list):
    # Begin for loop 
    for x in range(1, len(alphabet_list)):
        # Define variable to hold array
        placeHolder = alphabet_list[x]
        # Decrease index until reaches max/min range
        index = x - 1
        while placeHolder < alphabet_list[index] and index >= 0:
            alphabet_list[index] = alphabet_list[index + 1]
            # Decrement index until all items are accounted for and sorted
            index -= 1
        placeHolder = alphabet_list[index + 1]

main()
