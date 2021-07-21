const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
const date = document.getElementById('date')

btn.addEventListener('click', () =>{
    search.classList.toggle('active')
    input.focus()
})

var d = new Date();
var n = d.getFullYear();
date.innerHTML= n