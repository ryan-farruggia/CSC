#PUNC = ".,:;'\"?!"
#
#def removePunc(w):
#    neww = ""
#    for ch in w:
#        if ch not in PUNC:
#            neww = neww + ch
#    return neww
#
#def wordList(line):
#    words = []
#    lst = line.split()
#    for w in lst:
#        w = removePunc(w)
#        words.append(w)
#    return words
#s1 = "Words, with, punctuation!?"
#print(wordList(s1))
#s2 = "This is a sentence, with a , 12, and punctuation.?"
#print(wordList(s2))
def substring(str,s):
    posns = []
    for i in range(len(str)+len(s)):
        k = i
        j = 0
        done = False
        while j <= len(s) and not done:
            if str[k] == s[j]:
                k += 1
                j += 1
            else:
                done = True
        if not done:
            posns.append(i+1)
    return [i]

#
# main program
str = "abab"
s = "ab"
lst = substring(str,s)
print(lst)

str = "abbbaab"
s = "bb"
lst = substring(str,s)
print(lst)