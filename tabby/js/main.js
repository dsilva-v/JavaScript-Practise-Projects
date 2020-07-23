// Start writing JavaScript here!
const tabs = document.querySelectorAll('.tab')

Array.from(tabs).forEach(tab =>{
  tab.addEventListener('click', function(){
    const target = tab.dataset.theme
    tabs.forEach((t)=> t.classList.remove('is-selected'))
     tab.classList.add('is-selected')
 })
})
