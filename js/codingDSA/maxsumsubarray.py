def maxsum(arr):
     lists=[]
     length=0
     summlists=[]
     for i in range(len(arr)+1):
         for j in range(i):
             lists.append(arr[j:i])
     for i in range(len(lists)):
         summlists.append(len(lists[i])) 

    for i in range(len(summlists)):
         max=sum(lists[i])
         
     
         

     return  summlists         

print(maxsum([1,2,3]))

