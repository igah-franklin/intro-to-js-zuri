
'use script'
//Write a javascript code that prints out your name, height, and country on the screen

const getName =  document.querySelector('#name');
const getHeight =  document.querySelector('#height');
const getCountry =  document.querySelector('#country');
const printBtn =  document.querySelector('#get_name_btn');
const clearBtn =  document.querySelector('#clear_name_btn');


getName.innerHTML = 'Igah Franklin';
getHeight.innerHTML = '1.68m';
getCountry.innerHTML = 'Nigeria';

printBtn.addEventListener('click', ()=>{
    getName.innerHTML = 'Igah Franklin';
    getHeight.innerHTML = '1.68m';
    getCountry.innerHTML = 'Nigeria';
})

clearBtn.addEventListener('click', function(){
    getName.innerHTML = '';
    getHeight.innerHTML = '';
    getCountry.innerHTML = '';
});

