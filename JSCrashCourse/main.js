const ul=document.querySelector(".items");

//ul.lastElementChild.remove();
ul.firstElementChild.textContent="Hello";
ul.lastElementChild.innerHTML="<h1>Hello</h1>";

const btn=document.querySelector(".btn");
btn.style.background="red";

ul.firstElementChild.style.background="green";
ul.children[1].style.background="yellow";

///==================================================================///
//EVENTS//

// Mouse Event
btn.addEventListener('click', e => {
    e.preventDefault();
    console.log(e.target.className);
    document.getElementById('my-form').style.background = 'blue';
    document.querySelector('body').classList.add('bg-dark');
    ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
  });
  btn.addEventListener('mouseover', e => {
    e.preventDefault();
    console.log(e.target.className);
    document.getElementById('my-form').style.background = 'red';
    document.querySelector('body').classList.add('bg-dark');
    ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
  });

  btn.addEventListener('mouseout', e => {
    e.preventDefault();
    console.log(e.target.className);
    document.getElementById('my-form').style.background = 'yellow';
    document.querySelector('body').classList.add('bg-dark');
    ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
  });

  
  // Keyboard Event
 // const nameInput = document.querySelector('#name');
 // nameInput.addEventListener('input', e => {
 //   document.querySelector('.container').append(nameInput.value);
 //// });

  // USER FORM SCRIPT

