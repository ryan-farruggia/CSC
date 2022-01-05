#------------------------------------------------------------------
# Name:         Ryan Farruggia
# Date:         06-23-20
# Reference:    page # 154 problem # 10
# Title:        Monthly Sales Tax
# Inputs:       Total Income for 1 month
# Process:      Calculate county and state sales tax from income
# Outputs:      Display county and state sales tax totals
#------------------------------------------------------------------

# Main function to handle display and obtain user input for total monthly sales
def main():
    total_sales = int(input('Total sales for the month: $'))
    print('Total County Sales Tax (2%): $', total_county_tax(total_sales))
    print('Total State Sales Tax (4%): $', total_state_tax(total_sales))
    total_sales_tax = total_county_tax(total_sales) + total_state_tax(total_sales)
    print('Total Sales Tax Due: $', total_sales_tax)
    return total_sales
# Total county sales tax calculation function w/ total sales as argument
def total_county_tax(x):
    COUNTy_SALES_TAX = 0.02
    total_county = x * COUNTy_SALES_TAX
    return total_county
# Total state sales tax calculation function w/ total sales as argument
def total_state_tax(y):
    STATE_SALES_TAX = 0.04
    total_state = y * STATE_SALES_TAX
    return total_state
# Execute main()
main()
