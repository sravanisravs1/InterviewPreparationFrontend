
//var secondItem = document.querySelector('.list-group-item:nth-child(2)');
//secondItem.style.backgroundColor= 'green';

//var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
//thirdItem.hidden= 'hidden';

// QUERYSELECTORALL //
var titles = document.querySelectorAll('li');

console.log(titles);
titles[1].style.color = 'green';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even= document.querySelectorAll('li:nth-child(even)');

for(var i = 0; i < odd.length; i++){
   odd[i].style.backgroundColor = 'green';
   
 }

