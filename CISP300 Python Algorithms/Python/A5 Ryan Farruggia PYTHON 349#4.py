#------------------------------------------------------------------
# Name:         Ryan Farruggia
# Date:         07-09-20
# Reference:    page # 349 problem # 4
# Title:        Speeding Violation Calculator
# Inputs:       Speed limit and user's driving speed
# Process:      Calculate difference between driver_speed and
#               speed_limit, if given a speed below speed_limit,
#               notify user and ask for new information.
# Outputs:      Display difference between driver_speed and
#               speed_limit, display error messages notifying user
#               of bad data entry/entries.
#------------------------------------------------------------------
# Import colorama to highlight important error information. [this was fun to play with]
from colorama import Fore, Back, Style
def main():
    # Initialize speed_limit for usage in while loop
    speed_limit = 0
    # Begin while loop, nested try/except to catch bad data during loop
    while speed_limit < 20 or speed_limit > 70:
        try:
            speed_limit = int(input("Enter the speed limit: "))
            if speed_limit < 20:
                print("Speed limit must be greater than or equal to 20 mph.")
            elif speed_limit > 70:
                print("Speed limit must be less than or equal to 70 mph.")
            else:
                print("Accepted.")
        except ValueError:
            print("Invalid input. Try again.")
    # End while loop
    # Initialize driver_speed for usasge in while loop
    driver_speed = 0
    # Begin while loop, nested try/except to catch bad data during loop
    while driver_speed <= speed_limit:
        try:
            driver_speed = int(input("Enter your recorded speed: "))
            under_difference = speed_limit - driver_speed
            if driver_speed <= speed_limit:
                print("your input indicates you were driving:", Fore.yELLOW + str(under_difference) + " mph under the speed limit.", Style.RESET_ALL, "\nPlease enter your actual recorded speed.")
        except ValueError:
            print("Invalid input. Speed should be an integer.")
    # Calculate speeding violation
    over_difference = driver_speed - speed_limit
    # Once user makes it out of the previous while loop, continue to verify that current information still adheres to original rule (driver_speed > speed_limit)
    if driver_speed > speed_limit:
        print("you were driving", over_difference, "mph over the speed limit.")
main()