var mostWordsFound = function(sentences) {
    let max=0;
    let arr=[]
    for(let i=0;i<sentences.length;i++){
        arr[i]=sentences[i].split(' ')
        
         if (arr[i].length>max){
             max=arr[i].length
         }

        
    }
    return max
};