# part1
text = input("input string: ")

if (len(text) > 10):
    print("string too long")
elif (len(text) < 10):
    print("string not long enough")

# #  part2   
print(f"{text[0]}\n{text[-1]}")

# part3
for i in range (len(text)):
    print(text[:i + 1])

# part4
import random
new_text = list(text)
random.shuffle(new_text)
new_text = ''.join(new_text)
print(new_text)