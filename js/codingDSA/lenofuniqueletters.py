# For example, given the string "abcabcbb", the longest substring without repeating characters is "abc", with a length of 3. Another example is the string "bbbbb", which has the longest substring without repeating characters of length 1.

string="bacc"  
stack=[]
def lenofstack(string):
     for i in string:
        if i not in stack:
             stack.append(i)
        else:
             return len(stack)
             
print(lenofstack(string))             
             
            
     