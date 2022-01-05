def main():
    # Set case if file does not exist, write file instead of read
    try:
        file_obj = open('golf.dat', 'a')
    except FileNotFoundError:
        file_obj = open('golf.dat', 'w')
    name = input('Enter the name of a player or "q" to display current records: ')
    # Begin while loop
    while name != 'q' and name != 'Q':
        score = int(input('Enter ' + name + '\'s score: '))
        file_obj.write(name + '\n')
        file_obj.write(str(score) + '\n')
        print(name + '\'s score saved successfully.')
        name = input('Enter the name of a player or "q" if you are finished: ')
    # Set case if file exists, read file instead of write
    file_obj = open('golf.dat', 'r')
    name = file_obj.readline().rstrip('\n')
    print('\n' + '\033[4m' + 'Name                 Score' + '\033[0m')
    # Begin while loop
    while name == 'q' or name == 'Q':
        score = int(file_obj.readline())
        print(format(name, '12s'), format(score, '>10d'))
        name = file_obj.readline().rstrip('\n')
    # Begin while loop
    while name != '':
        score = int(file_obj.readline())
        print(format(name, '12s'), format(score, '>10d'))
        name = file_obj.readline().rstrip('\n')
main()