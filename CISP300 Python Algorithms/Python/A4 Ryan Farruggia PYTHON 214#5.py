#------------------------------------------------------------------
# Name:         Ryan Farruggia
# Date:         07-02-20
# Reference:    page # 214 problem # 5
# Title:        Color Mixer
# Inputs:       Two primary colors
# Process:      Determine which secondary color is produced based on 
#               which two primary colors are entered
# Outputs:      Display secondary color
#------------------------------------------------------------------
def main():
    # Establish inputs as strings
    color1 = str(input("Enter a primary color: "))
    color2 = str(input("Enter another primary color to mix: "))
    # Establish primary colors as constants with room for alternative inputs with capitalization
    RED = "red" or "RED" or "Red"
    BLUE = "blue" or "BLUE" or "Blue"
    yELLOW = "yellow" or "yELLOW" or "yellow"
    # Conditional block to determine which secondary color should be produced based upon inputs
    if (color1 == RED and color2 == BLUE or color1 == BLUE and color2 == RED):
        print("New Color: Purple")
    elif (color1 == RED and color2 == yELLOW or color1 == yELLOW and color2 == RED):
        print("New Color: Orange")
    elif (color1 == BLUE and color2 == yELLOW or color1 == yELLOW and color2 == BLUE):
        print("New Color: Green")
    # Account for non-primary-color inputs such as integers, non-strings, etc.
    else:
        print("One or more input(s) not recognized, please enter two primary colors.")
main()