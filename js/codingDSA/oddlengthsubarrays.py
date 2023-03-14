class Solution(object):
    def sumOddLengthSubarrays(self, arr):
        """
        :type arr: List[int]
        :rtype: int
        """
        lists=[]
        listodd=[]
        for i in range(len(arr)+1):
             for j in range(i):
                  lists.append(arr[j:i])
        sum1 =   0    
        for i in range(len(lists)):
               
             if len(lists[i])%2!=0:
                  listodd.append(lists[i])
                  sum1=sum1 + sum(lists[i])

        return sum1