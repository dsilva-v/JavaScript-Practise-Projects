const clickMeBtn = document.querySelector('.jsModalButton')
const body = document.querySelector('body')
const closeModalBtn = document.querySelector('.jsModalClose')
const modalOverlay = document.querySelector('.modal-overlay')
clickMeBtn.addEventListener('click', function(){
    body.classList.add('modal-overlay__open')
})

closeModalBtn.addEventListener('click', function(){
 //on clicking close Modal, modal should be hidden and main content has to show up in it's place
 body.classList.remove('modal-overlay__open')
})

modalOverlay.addEventListener('click', function(e){
     /* method 1: body.classList.remove('modal-overlay__open')  //problem is even inside modal bubbles up to modalOverlay and lcick on inside modal also runs this
      method2: stopping propagation {not suggested as any events you want to listen to in body or any top level ancestors
 will npt be bubbled up to it} */

  //better way is to check if the event passes through it(no direct checking available) via closest, if the event passses through modal --> the click is inside, if the evnt passes thru modal-overlay --> close modal

  if(!e.target.closest('.modal'))
  body.classList.remove('modal-overlay__open')
})




