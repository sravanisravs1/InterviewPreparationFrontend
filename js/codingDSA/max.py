arr=[1,30,60]
print(max(arr))
max=arr[0]
for i in range(len(arr)):
     if arr[i]>max:
         max=arr[i]
print(max)         
       