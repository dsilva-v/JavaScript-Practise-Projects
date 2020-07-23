//  const accordions = document.querySelectorAll('.accordion')
// Before event delegation -- attaching lots of event liseteners
// Array.from(accordions).forEach((accordion)=>{
//    const accHeader = accordion.querySelector('.accordion__header')
//     accHeader.addEventListener('click', function(){
//         accordion.classList.toggle('is--open')
//     })
// })

// After event delegation -->  delegate the event listener to the nearest common ancestor 

const accordionContainer = document.querySelector('.accordion-container')
accordionContainer.addEventListener('click', function(e){
    const accordionHeader = e.target.closest('.accordion__header')
    if(accordionHeader){
    const accordion = accordionHeader.parentElement
    accordion.classList.toggle('is--open')
    }
})

