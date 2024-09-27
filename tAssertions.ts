const box = document.querySelector('.box') as HTMLElement;
box.style.height = '200px';
box.style.width = '200px';
box.style.margin = '20px auto';
box.style.backgroundColor = 'red';
box.style.borderRadius = '30px';

const input = document.querySelector('.input') as HTMLInputElement;
input.addEventListener('input' , (ev: Event) :void => {
    console.log(input.value);
});
