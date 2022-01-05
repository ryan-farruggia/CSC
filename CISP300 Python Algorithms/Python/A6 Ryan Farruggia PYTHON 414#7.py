#------------------------------------------------------------------
# Name:         Ryan Farruggia
# Date:         07-16-20
# Reference:    page # 414 problem # 7
# Title:        Phone Number Lookup (Modified)
# Inputs:       Person's name or part of their name (case insensitive)
# Process:      Declare arrays for people and their phone numbers,
#               and search for person's name in the people array given
#               matching user input.
# Outputs:      Display the correct person's number, if found. If not
#               found, show an error regarding the bad data.
#------------------------------------------------------------------

def main():
    # Constant list size for parallel lists (arrays)
    LIST_SIZE = 7
    # Initialize found variable for use in while loop
    found = False
    # Establish people and phoneNumber lists (arrays)
    people = ["Robin Smith", "Jake Brown", "Brian Johnson", "Jessica Bradley", "Lance Truman", "Jeff Trundle", "Eric Samson"]
    phoneNumbers = ["(804) 421-5674", "(902) 789-8765", "(723) 907-8976", "(714) 438-5012", "(650) 569-4102", "(808) 587-2498", "(212) 198-5423"]
    # Accumulator
    y = 0
    # Take user input and convert to string
    searchValue = str(input("Enter a name to obtain their phone number: "))
    # Begin while loop
    while found == False and y <= LIST_SIZE - 1:
        # Account for lower-case and upper-case spellings of names
        if people[y] == searchValue or people[y].lower() == searchValue or people[y].upper() == searchValue:
            found = True
        # Increment/move up 1 position in the list until a match is found and/or no matches are found
        else:
            y = y + 1
    # Display relevant information on searched individuals
    if found == True:
        print("-------------------------------------------")
        print(people[y], "'s", " phone number is:\n", phoneNumbers[y], sep='')
        print("-------------------------------------------")
    else:
        print("Input not recognized. Please try again.")

main()
