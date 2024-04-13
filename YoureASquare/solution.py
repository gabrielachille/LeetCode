# name = input("what is your name? ")

# print("Hello "+ name)

#python madlibs

#-- went to the store and grabbed some --, then i went home and played --
# 1
# name = input("who dis?")

# item = input("what do you need?")

# game = input("What's your favorite game?")

# print(name + " went to the store and bought " + item +" then they went home and played " + game)

# price = 8

# numcoffee = input("RB: How many coffees do you wnat?")
# total = price * int(numcoffee)

# total = str(total)

# print("RB: Your total is $" + total)

# print(total)

# age = int(input("Enter your age\n"))

# if age >= 21:
#     print("You get a beer")
#     if age < 21:
# else:
#     print("You get a juice")

name = input("What is your name?\n")

if name == "Ben" or name == "Patricia":
    evil_status = input("Are you evil?\n")
    if evil_status == "Yes" and name == "Ben":
        print("Your're not welcome here Ben!! Get out!!")
    if evil_status == "Yes" and name == "Patricia":
        print("You're not welcome here Patricia!! Get out!! ")
        exit()
else:
    print("Hello " + name + ", thank you so much for coming in today.\n\n")