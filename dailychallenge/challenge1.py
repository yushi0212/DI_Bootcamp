number = input("input number ")
length = input("and input length: ")

number = int(number)
arr=[]
y = range(1, int(length) + 1)
for num in y:
    calc = number * num
    arr.append(calc)
print(arr)

