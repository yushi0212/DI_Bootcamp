input_text = input("enter anything: ")
remove_doubles = set(input_text) # join treat all doubles as the same
remove_doubles = sorted(remove_doubles)
remove_doubles = ''.join(remove_doubles)
print(remove_doubles)