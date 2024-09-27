var box = document.querySelector('.box');
box.style.height = '200px';
box.style.width = '200px';
box.style.margin = '20px auto';
box.style.backgroundColor = 'red';
box.style.borderRadius = '30px';
var input = document.querySelector('.input');
input.addEventListener('input', function (ev) {
    console.log(input.value);
});
