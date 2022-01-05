#---------------------------------------------------------------------
# Name:         Ryan Farruggia
# Date:         07-10-20
# Reference:    page # 279 problem # 3
# Title:        Budget Analysis
# Inputs:       Monthly budget, 'n' amount of expenses
# Process:      Convert inputs to integers, sum all expense inputs,
#               and calculate difference between budget and expenses
# Outputs:      Display whether user is over/under/exactly on budget
#               and ask whether user has finished entering their list 
#               of expenses.
#---------------------------------------------------------------------
def main():
    # Obtain monthly budget and convert to int
    budget = float(input("Monthly budget: $"))
    print("Begin entering your expenses:")
    # Initialize var total_expense for usage in while loop
    total_expense = 0
    # Initialize var resume for usage in while loop
    resume = 'y'
    # Begin while loop, do not exit until var resume changes value from 'yes' to 'No'
    while resume == 'y':
        expense = float(input("Expense amount: $"))
        total_expense = total_expense + expense
        resume = input("Do you have any other expense(s)?\nyes (y) No (n)\n")
    # End while loop
    # Calculate whether user is under/over/exactly on budget
    if total_expense < budget:
        diff = format(budget - total_expense, ',.2f')
        print("you are $", diff, "under budget.")
    elif total_expense > budget:
        diff = format(total_expense - budget, ',.2f')
        print("you are $", diff, "over budget.")
    else:
        print("you are exactly on budget.")
main()
