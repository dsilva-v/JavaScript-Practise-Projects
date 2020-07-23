// Start writing JavaScript here!

const btn = document.querySelector('.menu-button');
const body = document.querySelector('body')
//add event listener for button
btn.addEventListener('click', function(){
    const body = document.querySelector('body')
    body.classList.toggle('off-canvas--open')
})
