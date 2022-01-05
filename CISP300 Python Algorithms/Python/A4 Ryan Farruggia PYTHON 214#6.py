#------------------------------------------------------------------
# Name:         Ryan Farruggia
# Date:         07-03-20
# Reference:    page # 214 problem # 6
# Title:        Book Club Points
# Inputs:       Number of books purchased by club member
# Process:      Calculate total points earned based on a fixed point system
# Outputs:      Display total points earned by club member
#------------------------------------------------------------------
def main():
    # Establish input as an integer
    books = int(input("Enter amount of books purchased: "))
    # Conditional block for points earned based on fixed point system
    if (books == 0):
        print("Points earned: 0")
    elif (books == 1):
        print("Points earned: 5")
    elif (books == 2):
        print("Points earned: 15")
    elif (books == 3):
        print("Points earned: 30")
    elif (books >= 4):
        print("Points earned: 60")
    # Account for non-positive or NaN inputs
    else:
        print("Input not recognized.")
main()