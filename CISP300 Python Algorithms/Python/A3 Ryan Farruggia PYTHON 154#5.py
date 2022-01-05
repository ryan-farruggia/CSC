#------------------------------------------------------------------
# Name:         Ryan Farruggia
# Date:         06-23-20
# Reference:    page # 154 problem # 5
# Title:        Property Tax
# Inputs:       Actual Value of property
# Process:      Calculate Assessment Value and Property Taxes
# Outputs:      Display Assessment Value and Property Tax totals
#------------------------------------------------------------------

# Main function to handle display and user input for actual value of property
def main():
    actual_value = int(input('Enter Actual Value of Property: $'))
    print('Assessment Value: $', calc_assess_value(actual_value))
    return actual_value
# Calculate assessment value given actual value as argument
def calc_assess_value(value):
    assessment_value = value * 0.60
    print('Property Tax: $', calc_property_tax(assessment_value))
    return assessment_value
# Calculate assessment value given assessment value as argument
def calc_property_tax(tax):
    property_tax = (tax / 100) * 0.64
    return property_tax
# Execute main()
main()
