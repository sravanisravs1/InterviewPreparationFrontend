accounts = [[2,8,7],[7,1,3],[1,9,5]]
a={}
max=0
for i in range(len(accounts)):
     a[i]=sum(accounts[i])
     if a[i]>max:
         max=a[i]

print(max)     