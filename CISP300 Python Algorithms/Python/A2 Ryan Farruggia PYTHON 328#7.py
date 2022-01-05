#------------------------------------------------------------------
# Name:         Ryan Farruggia
# Date:         06-19-20
# Reference:    page # 328 problem # 7
# Title:        Test Average and Grade
# Inputs:       Five separate numbers range 0-100
# Process:      Categorize inputs according to grading scale
# Outputs:      Display grade letter and average grade
#------------------------------------------------------------------
def main():
    # Set variables and inputs, print as strings
    score1 = int(input("Enter first test score : "))
    print(str(score1) + " = ", determineGrade(score1))
    score2 = int(input("Enter second test score: "))
    print(str(score2) + " = ", determineGrade(score2))
    score3 = int(input("Enter third test score: "))
    print(str(score3) + " = ", determineGrade(score3))
    score4 = int(input("Enter fourth test score: "))
    print(str(score4) + " = ", determineGrade(score4))
    score5 = int(input("Enter fifth test score: "))
    print(str(score5) + " = ", determineGrade(score5))
    # Call calcAverage() function and print average grade + number score
    average = calcAverage(score1, score2, score3, score4, score5)
    print("your average grade:", determineGrade(average), "(" + str(average) + ")")
def calcAverage(score1, score2, score3, score4, score5):
    # Calculate average scores and return value
    average = (score1 + score2 + score3 + score4 + score5) / 5
    return average
def determineGrade(score):
    # Establish grading scale, making exceptions for negative and non-number inputs
    if (score >= 90):
        return 'A'
    elif(score >= 80 and score < 90):
        return 'B'
    elif(score >= 70 and score < 80):
        return 'C'
    elif(score >= 60 and score < 70):
        return 'D'
    elif(score < 60 and score >= 0):
        return 'F'
        # Catch error statement
    else:
        return 'Input not recognized. Please enter a number 0-100.'
main()
