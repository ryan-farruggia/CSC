#------------------------------------------------------------------
# Name:         Ryan Farruggia
# Date:         07-15-20
# Reference:    page # 414 problem # 4
# Title:        Number Analysis Program
# Inputs:       Comma separated list of 20 integers
# Process:      Convert to array and calculate average, min, max, and sum of inputs
# Outputs:      Display lowest, highest, the sum, and average of inputs
#------------------------------------------------------------------

# Function to calculate the average of numbers[]
def calcAverage(myList):
    return sum(myList)/len(myList)
# Define numbers[]
numbers = []
# Begin For Loop with max range of 20 inputs
for i in range(20):
    numbers.append(int(input("Number " + str(i + 1) + ": ")))
# Calculate average of numbers[] and store in a variable
avg = calcAverage(numbers)
# Begin displaying calculated data
print("\nHere's the data for your chosen numbers:")
print("------------------------------------------")
print("Lowest Number:", min(numbers))
print("Highest Number:", max(numbers))
print("Total:", sum(numbers))
print("Average:", avg)
print("------------------------------------------")
