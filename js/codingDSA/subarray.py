def sublists(arr):
        lists=[]
        # slicing 
        for i in range(len(arr)+1):
             for j in range(i):
                 lists.append(arr[j:i]) 

        return lists

print(sublists([1,2,3]))  

a=[1,2,3,4,5]
print(a[1:5])