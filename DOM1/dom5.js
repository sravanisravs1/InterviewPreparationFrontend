var items = document.getElementsByClassName('list-group-item2');
console.log(items);
// console.log(items[1]);
 items[0].textContent = 'Hello 2';
items[0].style.fontWeight = 'bold';
items[0].style.backgroundColor = 'yellow';

var li = document.getElementsByTagName('li');
//console.log(li);
console.log(li[1]);
li[4].textContent = 'Hello';
// li[4].style.fontWeight = 'bold';
 li[4].style.backgroundColor = 'blue';
