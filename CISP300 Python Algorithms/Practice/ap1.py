# Reference:    page # 98 problem # 4
# Title:        Tax, Tip, and Total
# Inputs:       Cost of food
# Process:      Calculation of tax, tip, and total given an input
# Outputs:      Displays tax, tip, and total of the cost of a meal
# Given:        Sales tax is 7%, Tip is input by user, all other info is manual.


def main():
    # Set variables and inputs
    sales_tax = 0.07
    tip = 0.15
    food_charge = float(input("Cost of food: "))
    # Calculations
    tax_total = sales_tax * food_charge
    tip_total = tip * food_charge
    total_due = tip_total + tax_total + food_charge
    # Display/Output
    print("Tax (7%): " + str(format(round(tax_total, 2))))
    print("Tip (15%): " + str(format(round(tip_total, 2))))
    print("Total due: " + str(format(round(total_due, 2))))
main()