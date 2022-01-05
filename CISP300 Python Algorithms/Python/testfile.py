# TEMPERATURE CONVERTER (C TO F)
#def main():
#    celsius = int(input("Temperature in Celsius: "))
#    fahr = (9/5)*celsius+32
#    print("Temperature in Fahrenheit: ", fahr)
#main()
#

# CREDENTIALS OUTPUTTER
#def main():
#    name = str(input("Name: "))
#    age = int(input("Age: "))
#    state = str(input("State: "))
#    major = str(input("Major: "))
#    print("your credentials: ")
#    print(name)
#    print(age)
#    print(state)
#    print(major)
#main()

# DISTANCE TRAVELED GIVEN SPEED AS INPUT
#def main():
#    time1 = 5
#    time2 = 12
#    time3 = 24
#    speed = int(input("Speed of vehicle: "))
#    distance1 = speed * time1
#    distance2 = speed * time2
#    distance3 = speed * time3
#    print ("Going " + str(speed) + " mph, you will travel: ")
#    print(distance1, "miles in 5 hours.")
#    print(distance2, "miles in 12 hours.")
#    print(distance3, "miles in 24 hours.")
#main()

# COST OF FIVE ITEMS AT CHECKOUT
#def main():
#    item1 = float(input("Cost of item 1: "))
#    item2 = float(input("Cost of item 2: "))
#    item3 = float(input("Cost of item 3: "))
#    item4 = float(input("Cost of item 4: "))
#    item5 = float(input("Cost of item 5: "))
#    item_total = item1 + item2 + item3 + item4 + item5
#    sales_tax = 1.06
#    total = round((item_total * sales_tax), 2)
#    print("Sales tax: " + str(item_total * 0.06))
#    print("Total due: " + str(total))
#main()

# COOKIES IN A BAG CALORIES CONSUMED
#def main():
#    calories_per_cookie = 75
#    cookies_eaten = int(input("Enter amount of cookies eaten: "))
#    calories_actual = cookies_eaten * calories_per_cookie
#    print("Calories consumed:", calories_actual)
#main()

# PERCENTAGE OF MALE VS FEMALE STUDENTS IN A CLASS
#def main():
#    males = int(input("Number of males in class:"))
#    females = int(input("Number of females in class:"))
#    total_students = males + females
#    percent_male = (males/total_students) * 100
#    percent_female = (females/total_students) * 100
#    print("The class is " + str(format(round(percent_male, 2))) + "% male and " + str(format(round(percent_female, 2))) + "% female")
#main()

#def main():
#    from random import seed
#    from random import random
#    seed(1)
#    x = int(format(round(random() * 100)))
#    y = int(format(round(random() * 100)))
#    print("Perform addition:\n" + str(x) + " + " + str(y))
#    user_answer = int(input("your answer: "))
#    actual_answer = x + y
#    if user_answer == actual_answer:
#        print("Correct!")
#    elif user_answer != actual_answer:
#        print("Incorrect - Answer is: " + str(actual_answer))
#    else:
#        print("Input not recognized.")
#
#main()
import math
def main():
    print("NOTICE: Enter 'x' for the unknown value\n")
    A = input("Final/Desired Amount: ")
    P = int(input("Principal/Invested Amount: "))
    r = float(input("Interest Rate (%)"))
    n = int(input("Number of compoundings per time period: "))
    t = int(input("Number of time periods elapsed: "))
    amount = P*(1+(r/n)**(n*t))
    principal = (A*n**(n*t))/((n+r)**(n*t))
    rate = NaN
    number = NaN
    time = (math.log1p(A/P))/(n*(math.log1p(1+(r/n))))
    if A == "x":
        print(amount)
    elif P == "x":
        print(principal)
    elif r == "x":
        print(rate)
    elif n == "x":
        print(number)
    elif t == "x":
        print(time)
    else:
        print("Something went wrong. Please try again.")
main()
